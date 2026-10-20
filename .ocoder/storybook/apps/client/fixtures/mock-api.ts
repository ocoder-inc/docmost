import type { AxiosAdapter } from 'axios';
import api from '@source/apps/client/src/lib/api-client';

import {
  paginated,
  sampleApiKeys,
  sampleChatMessages,
  sampleChats,
  sampleChildPages,
  sampleCurrentUser,
  sampleEntitlements,
  samplePages,
  sampleSpaces,
  sampleWorkspace,
} from './data';

/** What the app's API answers, by path (without `/api`): a value or a function of the request body. */
type Handler = unknown | ((body: any) => unknown);

const defaults: Record<string, Handler> = {
  '/users/me': sampleCurrentUser,
  '/workspace/info': sampleWorkspace,
  '/workspace/entitlements': sampleEntitlements,
  '/workspace/public': sampleWorkspace,
  '/auth/collab-token': { token: 'collab-token' },
  '/version': { currentVersion: '0.24.0', latestVersion: '0.24.0', releaseUrl: '' },
  '/spaces': paginated(sampleSpaces),
  '/spaces/info': (body: any) =>
    sampleSpaces.find((space) => space.id === body?.spaceId || space.slug === body?.spaceId) ??
    sampleSpaces[0],
  '/spaces/watched-ids': [],
  '/pages/recent': paginated(samplePages),
  '/pages/sidebar-pages': (body: any) =>
    paginated(
      body?.pageId
        ? sampleChildPages.filter((page) => page.parentPageId === body.pageId)
        : samplePages.filter((page) => !body?.spaceId || page.spaceId === body.spaceId),
    ),
  '/pages/info': (body: any) =>
    [...samplePages, ...sampleChildPages].find(
      (page) => page.id === body?.pageId || page.slugId === body?.pageId,
    ) ?? samplePages[0],
  '/pages/breadcrumbs': [],
  '/api-keys': paginated(sampleApiKeys),
  '/ai/chats': paginated(sampleChats),
  '/ai/chats/info': (body: any) => ({
    chat: sampleChats.find((chat) => chat.id === body?.chatId) ?? sampleChats[0],
    messages: sampleChatMessages,
  }),
  '/ai/chats/search': sampleChats,
  '/notifications/unread-count': { count: 2 },
  '/personal-space/info': null,
  '/notifications': paginated([]),
  '/favorites': (body: any) =>
    paginated(
      body?.type === 'space'
        ? sampleSpaces.slice(0, 2).map((space, index) => ({
            id: `fav-space-${index}`,
            userId: sampleCurrentUser.user.id,
            pageId: null,
            spaceId: space.id,
            templateId: null,
            type: 'space',
            workspaceId: sampleCurrentUser.workspace.id,
            createdAt: space.createdAt,
            space: { id: space.id, name: space.name, slug: space.slug, logo: null },
          }))
        : [],
    ),
  '/favorites/ids': paginated([]),
  '/oauth/grants': [],
  '/search/suggest': { users: [], groups: [], pages: [] },
};

let overrides: Record<string, Handler> = {};

/** Replaces what some paths answer for the current story; reset when the next story mounts. */
export function mockApi(routes: Record<string, Handler>) {
  overrides = { ...overrides, ...routes };
}

export function resetApiMocks() {
  overrides = {};
}

const adapter: AxiosAdapter = async (config) => {
  const path = (config.url ?? '').split('?')[0];
  let body: any = config.data;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      // form data or plain text
    }
  }
  const handler = path in overrides ? overrides[path] : path in defaults ? defaults[path] : null;
  const data = typeof handler === 'function' ? (handler as (body: any) => unknown)(body) : handler;
  return {
    data: { data, success: true, status: 200 },
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    request: { responseURL: `${window.location.origin}/api${path}` },
  };
};

api.defaults.adapter = adapter;
