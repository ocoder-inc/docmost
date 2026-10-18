// API keys as the server lists them (GET /api-keys), and workspaces with the API / MCP settings
// the API key and AI settings pages read from the current user atom.
import type { IApiKey } from '@source/apps/client/src/ee/api-key/types/api-key.types';
import type { ICurrentUser } from '@source/apps/client/src/features/user/types/user.types';
import { sampleCurrentUser, sampleUser, sampleWorkspace } from './story-kit';

const workspaceId = sampleWorkspace.id;

const jane = { id: sampleUser.id, name: 'Jane Cooper', email: 'jane.cooper@example.com', avatarUrl: null };
const marcus = { id: '01964d2a-3333-7c1e-9a4d-2b5e8f6c3a10', name: 'Marcus Lee', email: 'marcus.lee@example.com', avatarUrl: null };
const priya = { id: '01964d2a-4444-7c1e-9a4d-2b5e8f6c3a10', name: 'Priya Natarajan', email: 'priya@example.com', avatarUrl: null };

export const apiKeys: IApiKey[] = [
  {
    id: '01964d2b-a001-7c1e-9a4d-2b5e8f6c3a10',
    name: 'CI docs sync',
    creatorId: jane.id,
    workspaceId,
    expiresAt: '2027-04-15T00:00:00Z',
    lastUsedAt: '2026-10-17T14:32:00Z',
    createdAt: '2026-04-15T09:12:00Z',
    creator: jane,
  },
  {
    id: '01964d2b-a002-7c1e-9a4d-2b5e8f6c3a10',
    name: 'Zapier integration',
    creatorId: marcus.id,
    workspaceId,
    expiresAt: null,
    lastUsedAt: '2026-10-12T08:05:00Z',
    createdAt: '2026-02-03T16:40:00Z',
    creator: marcus,
  },
  {
    id: '01964d2b-a003-7c1e-9a4d-2b5e8f6c3a10',
    name: 'Claude Desktop MCP',
    creatorId: priya.id,
    workspaceId,
    expiresAt: '2027-01-20T00:00:00Z',
    lastUsedAt: null,
    createdAt: '2026-10-16T11:20:00Z',
    creator: priya,
  },
  {
    id: '01964d2b-a004-7c1e-9a4d-2b5e8f6c3a10',
    name: 'Legacy import script',
    creatorId: jane.id,
    workspaceId,
    expiresAt: '2025-09-01T00:00:00Z',
    lastUsedAt: '2025-08-28T19:47:00Z',
    createdAt: '2025-06-01T10:00:00Z',
    creator: jane,
  },
];

/** The key as returned right after creation: the only time the token is sent. */
export const createdApiKey: IApiKey = {
  ...apiKeys[0],
  token: 'dm_live_7f3b9c1e4a2d8b6f0e5c3a1d9b7f2e4c6a8d0b2f4e6c8a1d',
};

function withSettings(settings: Record<string, unknown>): ICurrentUser {
  return {
    ...sampleCurrentUser,
    workspace: { ...sampleWorkspace, settings: { ...(sampleWorkspace.settings as object), ...settings } },
  } as ICurrentUser;
}

/** MCP server switched on: the server URL, the OAuth setting and the tool list show. */
export const mcpEnabledUser = withSettings({
  ai: { search: true, generative: true, chat: true, mcp: true, enforceMcpOauth: true },
});

/** API key creation limited to admins. */
export const restrictedApiUser = withSettings({ api: { restrictToAdmins: true } });
