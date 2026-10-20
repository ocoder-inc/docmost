import { type ReactNode, useLayoutEffect, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider as Provider1 } from '@mantine/core';
import { mantineCssResolver as value1_cssVariablesResolver, theme as value1_theme } from '@source/apps/client/src/theme';
import { ModalsProvider as Provider2 } from '@mantine/modals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider as Provider4 } from 'react-helmet-async';
import { PostHogProvider as Provider5 } from 'posthog-js/react';
import { default as value5_client } from 'posthog-js';
import { Notifications } from '@mantine/notifications';
import { Provider as JotaiProvider, createStore } from 'jotai';
import api from '@source/apps/client/src/lib/api-client';
import { currentUserAtom } from '@source/apps/client/src/features/user/atoms/current-user-atom';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { mockAdapter, resetApiRoutes } from '../fixtures/api';
import { currentUser, entitlements } from '../fixtures/data';

// The app's API client answers from sample data: there is no server behind the Storybook.
api.defaults.adapter = mockAdapter;

/**
 * The app opens a socket.io connection once the user has loaded. There is no server to reach, so
 * sockets are created but never connect, as when the server is briefly unreachable.
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
window.WebSocket = OfflineWebSocket as unknown as typeof WebSocket;

/**
 * The app's atoms, in a store per story: signed in as the sample user of a workspace entitled to
 * every feature, as the app is once its user provider has loaded `/users/me`.
 */
function StoryAtoms({ children }: { children: ReactNode }) {
  const [store] = useState(() => {
    resetApiRoutes();
    const next = createStore();
    next.set(currentUserAtom, currentUser);
    next.set(entitlementAtom, entitlements);
    return next;
  });
  return <JotaiProvider store={store}>{children}</JotaiProvider>;
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
                  <StoryAtoms>{children}</StoryAtoms>
                </Provider5>
              </Provider4>
            </StoryQueryClient>
          </Provider2>
        </Provider1>
      </MemoryRouter>
    </>
  );
}
