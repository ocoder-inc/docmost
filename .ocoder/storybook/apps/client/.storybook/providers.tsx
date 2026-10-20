import { type ReactNode, useLayoutEffect, useState } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider as Provider1 } from '@mantine/core';
import { mantineCssResolver as value1_cssVariablesResolver, theme as value1_theme } from '@source/apps/client/src/theme';
import { ModalsProvider as Provider2 } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider as Provider4 } from 'react-helmet-async';
import { PostHogProvider as Provider5 } from 'posthog-js/react';
import { default as value5_client } from 'posthog-js';
import { createStore, Provider as JotaiProvider, useStore, type WritableAtom } from 'jotai';
import type { AxiosAdapter } from 'axios';
import api from '@source/apps/client/src/lib/api-client';
import { currentUserAtom } from '@source/apps/client/src/features/user/atoms/current-user-atom';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import * as fixtures from '../fixtures/data';

/**
 * There is no network: the app's socket.io client would open a WebSocket to the Storybook origin as
 * soon as the user is loaded. This stand-in never connects, so the app behaves as if it is offline.
 */
class OfflineWebSocket extends EventTarget {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;
  readonly CONNECTING = 0;
  readonly OPEN = 1;
  readonly CLOSING = 2;
  readonly CLOSED = 3;
  readyState = 0;
  binaryType = 'blob';
  bufferedAmount = 0;
  extensions = '';
  protocol = '';
  onopen = null;
  onclose = null;
  onerror = null;
  onmessage = null;
  constructor(readonly url: string) {
    super();
  }
  send() {}
  close() {
    this.readyState = 3;
  }
}
(globalThis as { WebSocket: unknown }).WebSocket = OfflineWebSocket;

/**
 * The app's API client answers from fixtures instead of the server. Each handler gets the request
 * body and returns what the endpoint's `data` would be. Stories add or replace handlers with
 * `withApi`; anything unknown answers with an empty page of results.
 */
type ApiHandler = (body: any) => unknown;
const defaultApi: Record<string, ApiHandler> = {
  '/users/me': () => fixtures.currentUser,
  '/workspace/info': () => fixtures.workspace,
  '/workspace/entitlements': () => fixtures.entitlements,
  '/workspace/update': (body) => ({ ...fixtures.workspace, ...body }),
  '/auth/collab-token': () => ({ token: 'collab-token' }),
  '/version': () => ({ currentVersion: '0.24.1', latestVersion: '0.24.1', releaseUrl: '' }),
  '/notifications/unread-count': () => ({ count: 3 }),
  '/notifications': () => fixtures.paginated([]),
  '/favorites': (body) =>
    fixtures.paginated(body?.type === 'space' ? fixtures.favoriteSpaces : []),
  '/personal-space/info': () => null,
  '/spaces': () => fixtures.paginated(fixtures.spaces),
  '/spaces/info': (body) => fixtures.spaces.find((s) => s.id === body?.spaceId || s.slug === body?.spaceId) ?? fixtures.spaces[0],
  '/pages/recent': () => fixtures.paginated(fixtures.pages),
  '/pages/created-by-user': () => fixtures.paginated(fixtures.pages),
  '/pages/sidebar-pages': (body) =>
    fixtures.paginated(
      body?.pageId
        ? fixtures.childPages
        : fixtures.pages.filter((p) => p.spaceId === (body?.spaceId ?? fixtures.spaces[0].id)),
    ),
  '/pages/info': (body) => fixtures.pages.find((p) => p.id === body?.pageId || p.slugId === body?.pageId) ?? fixtures.pages[0],
  '/search/suggest': () => ({ users: [], groups: [], pages: fixtures.pages }),
  '/api-keys': () => fixtures.paginated(fixtures.apiKeys),
  '/api-keys/create': () => fixtures.createdApiKey,
  '/ai/chats': () => fixtures.paginated(fixtures.chats),
  '/ai/chats/search': () => fixtures.chats.slice(0, 2),
  '/ai/chats/info': (body) => ({
    chat: fixtures.chats.find((c) => c.id === body?.chatId) ?? fixtures.chats[0],
    messages: fixtures.chatMessages,
  }),
};
let storyApi: Record<string, ApiHandler> = {};

const fixtureAdapter: AxiosAdapter = async (config) => {
  const path = (config.url ?? '').replace(/^\/api\//, '/').split('?')[0];
  const body = typeof config.data === 'string' ? JSON.parse(config.data || 'null') : config.data;
  const handler = storyApi[path] ?? defaultApi[path];
  const data = handler ? await handler(body) : fixtures.paginated([]);
  return {
    data: { data, success: true, status: 200 },
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    request: { responseURL: '' },
  };
};
api.defaults.adapter = fixtureAdapter;

/** A story decorator that answers the given endpoints (paths as the app's services write them). */
export function withApi(handlers: Record<string, ApiHandler>): Decorator {
  return (Story) => {
    useState(() => {
      storyApi = { ...storyApi, ...handlers };
    });
    return <Story />;
  };
}

/** A story decorator that sets jotai atoms (the signed-in user, workspace settings…) before the story renders. */
export function withAtoms(values: Array<[WritableAtom<any, [any], any>, unknown]>): Decorator {
  return (Story) => {
    const store = useStore();
    useState(() => {
      for (const [atom, value] of values) store.set(atom, value);
    });
    return <Story />;
  };
}

/** A story decorator that renders the story as the element of a route, so `useParams` sees the URL's params. */
export function withRoutePath(path: string): Decorator {
  return (Story) => (
    <Routes>
      <Route path={path} element={<Story />} />
    </Routes>
  );
}

/**
 * The stories' query client: no retries against a backend that is not there. One instance, so code
 * that imports the app's client (through the entry stand-in) uses the same cache; emptied per story.
 */
export const storyQueryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
});

function StoryQueryClient({ children }: { children: ReactNode }) {
  const [client] = useState(() => {
    storyQueryClient.clear();
    return storyQueryClient;
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

/** A fresh jotai store per story, signed in as the sample workspace owner the way `UserProvider` leaves it. */
function StoryStore({ children }: { children: ReactNode }) {
  const [store] = useState(() => {
    storyApi = {};
    const next = createStore();
    next.set(currentUserAtom, fixtures.currentUser);
    next.set(entitlementAtom, fixtures.entitlements);
    return next;
  });
  return <JotaiProvider store={store}>{children}</JotaiProvider>;
}

/** Applies the theme the capture asked for where apps commonly read it. */
function useDocumentTheme(theme: string) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);
}

/** `route` is where the in-memory router, if the app has one, starts: the story's `route` parameter. */
export function Providers({
  theme,
  route = '/',
  children,
}: {
  theme: string;
  route?: string;
  children: ReactNode;
}) {
  useDocumentTheme(theme);
  return (
    <>
      <MemoryRouter initialEntries={[route]}>
        <Provider1 theme={value1_theme} cssVariablesResolver={value1_cssVariablesResolver} forceColorScheme={theme === 'dark' ? 'dark' : 'light'}>
          <Provider2>
            <StoryQueryClient>
              <Notifications position="bottom-center" limit={3} zIndex={10000} />
              <Provider4>
                <Provider5 client={value5_client}>
                  <StoryStore>{children}</StoryStore>
                </Provider5>
              </Provider4>
            </StoryQueryClient>
          </Provider2>
        </Provider1>
      </MemoryRouter>
    </>
  );
}
