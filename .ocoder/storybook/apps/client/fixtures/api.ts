// An in-memory stand-in for the Docmost API. The app talks to its server through one axios instance
// (`@/lib/api-client`); `.storybook/providers.tsx` points that instance's adapter here so components
// that fetch on mount get sample data instead of reaching for a server that is not there.
import type { AxiosAdapter, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import {
  aiChatMessages,
  aiChats,
  apiKeys,
  childPages,
  currentUser,
  entitlements,
  favoriteSpaces,
  pages,
  paginate,
  spaces,
  workspace,
} from './data';

type Handler = (body: any) => unknown;
/** A route answers with data (wrapped as the server wraps it), or a function of the request body. */
export type Routes = Record<string, unknown>;

const defaultRoutes: Routes = {
  '/users/me': currentUser,
  '/workspace/entitlements': entitlements,
  '/workspace/info': workspace,
  '/workspace/update': (body: any) => ({ ...workspace, ...body }),
  '/auth/collab-token': { token: 'collab-token' },
  '/version': {
    currentVersion: '0.24.1',
    latestVersion: '0.24.1',
    releaseUrl: 'https://github.com/docmost/docmost/releases',
  },
  '/notifications': paginate([]),
  '/notifications/unread-count': { count: 3 },
  '/favorites': (body: any) => paginate(body?.type === 'space' ? favoriteSpaces : []),
  '/favorites/ids': paginate([]),
  '/spaces': paginate(spaces),
  '/spaces/info': (body: any) => spaces.find((s) => s.id === body?.spaceId || s.slug === body?.spaceId) ?? spaces[0],
  '/personal-space/info': null,
  '/pages/recent': paginate(pages),
  '/pages/sidebar-pages': (body: any) => paginate(body?.pageId ? childPages : pages.filter((p) => !body?.spaceId || p.spaceId === body.spaceId)),
  '/pages/info': (body: any) => pages.find((p) => p.id === body?.pageId || p.slugId === body?.pageId) ?? pages[0],
  '/api-keys': paginate(apiKeys),
  '/ai/chats': paginate(aiChats),
  '/ai/chats/search': (body: any) =>
    aiChats.filter((c) => (c.title ?? '').toLowerCase().includes(String(body?.query ?? '').toLowerCase())),
  '/ai/chats/info': (body: any) => ({
    chat: aiChats.find((c) => c.id === body?.chatId) ?? aiChats[0],
    messages: aiChatMessages,
  }),
};

let overrides: Routes = {};

/** Replaces the routes a story needs answered differently; reset for every story by the providers. */
export function setApiRoutes(routes: Routes) {
  overrides = routes;
}

export function resetApiRoutes() {
  overrides = {};
}

function parseBody(data: unknown) {
  if (typeof data !== 'string') return data;
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export const mockAdapter: AxiosAdapter = async (config: InternalAxiosRequestConfig) => {
  const path = (config.url ?? '').replace(/^\/api(?=\/)/, '').split('?')[0];
  const route = path in overrides ? overrides[path] : defaultRoutes[path];
  const body = parseBody(config.data);
  if (route === undefined) {
    console.warn(`[story api] no sample data for ${path}; answering with an empty list`);
  }
  const data =
    route === undefined ? paginate([]) : typeof route === 'function' ? (route as Handler)(body) : route;
  const response: AxiosResponse = {
    data: { data, success: true, status: 200 },
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    request: { responseURL: `${window.location.origin}/api${path}` },
  };
  return response;
};
