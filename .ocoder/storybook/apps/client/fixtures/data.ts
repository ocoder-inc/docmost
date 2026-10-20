// Sample data shaped like the Docmost API's responses, for the stories and the mock API in
// `.storybook/providers.tsx`.
import type { ICurrentUser, IUser } from '@source/apps/client/src/features/user/types/user.types';
import type { IWorkspace } from '@source/apps/client/src/features/workspace/types/workspace.types';
import type { Entitlements } from '@source/apps/client/src/ee/entitlement/entitlement.types';
import type { ISpace } from '@source/apps/client/src/features/space/types/space.types';
import type { IPage } from '@source/apps/client/src/features/page/types/page.types';
import type { IApiKey } from '@source/apps/client/src/ee/api-key/types/api-key.types';
import type { AiChat, AiChatMessage, AiChatToolCall } from '@source/apps/client/src/ee/ai-chat/types/ai-chat.types';
import type { IFavorite } from '@source/apps/client/src/features/favorite/types/favorite.types';
import type { IPagination } from '@source/apps/client/src/lib/types';
import { SpaceRole } from '@source/apps/client/src/lib/types';

export const WORKSPACE_ID = '0198a1c2-4f1e-7d3a-9b2c-1a2b3c4d5e6f';

export function paginated<T>(items: T[], hasNextPage = false): IPagination<T> {
  return {
    items,
    meta: {
      limit: 20,
      hasNextPage,
      hasPrevPage: false,
      nextCursor: hasNextPage ? 'next-cursor' : null,
      prevCursor: null,
    },
  };
}

export const user: IUser = {
  id: '0198a1c2-5a10-7c11-8a01-aa11bb22cc33',
  name: 'Jane Cooper',
  email: 'jane.cooper@acme.com',
  emailVerifiedAt: new Date('2025-02-03T09:12:00Z'),
  avatarUrl: null,
  timezone: 'Europe/London',
  settings: {
    preferences: { fullPageWidth: false, pageEditMode: 'edit', editorToolbar: true },
  },
  invitedById: null,
  lastLoginAt: '2026-10-19T08:30:00Z',
  lastActiveAt: new Date('2026-10-19T08:30:00Z'),
  locale: 'en-US',
  createdAt: new Date('2025-02-03T09:12:00Z'),
  updatedAt: new Date('2026-09-01T10:00:00Z'),
  role: 'owner',
  workspaceId: WORKSPACE_ID,
  deactivatedAt: null,
  deletedAt: null,
  fullPageWidth: false,
  pageEditMode: 'edit',
  editorToolbar: true,
  notificationPageUpdates: true,
  notificationPageUserMention: true,
  notificationCommentUserMention: true,
  notificationCommentCreated: true,
  notificationCommentResolved: true,
};

export const workspace: IWorkspace = {
  id: WORKSPACE_ID,
  name: 'Acme Inc.',
  description: 'Acme product and engineering wiki',
  logo: null,
  hostname: 'acme',
  defaultSpaceId: '0198a1c2-6b20-7e01-9a01-000000000001',
  customDomain: null,
  enableInvite: true,
  settings: {
    ai: { search: true, generative: true, chat: true, mcp: true, enforceMcpOauth: false },
    api: { restrictToAdmins: false },
    spaces: { allowPersonal: true },
  },
  status: 'active',
  enforceSso: false,
  stripeCustomerId: null,
  billingEmail: 'billing@acme.com',
  trialEndAt: null,
  createdAt: new Date('2025-02-03T09:12:00Z'),
  updatedAt: new Date('2026-09-01T10:00:00Z'),
  emailDomains: ['acme.com'],
  memberCount: 24,
  plan: 'business',
};

export const currentUser: ICurrentUser = { user, workspace };

export const entitlements: Entitlements = {
  cloud: false,
  tier: 'enterprise',
  features: [
    'sso:custom', 'sso:google', 'mfa', 'api:keys', 'comment:resolution', 'page:permissions', 'ai',
    'import:confluence', 'import:docx', 'import:pdf', 'attachment:indexing', 'security:settings', 'mcp',
    'scim', 'page:verification', 'audit:logs', 'retention', 'sharing:controls', 'templates',
    'comment:viewer', 'spaces:personal', 'export:docx', 'bases', 'oauth', 'ai:controls', 'mcp:controls',
    'public-space:appearance', 'siem',
  ],
};

/** The free tier: no paid features, so gated controls show their upgrade state. */
export const freeEntitlements: Entitlements = { cloud: false, tier: 'free', features: [] };

function space(id: string, name: string, slug: string, description: string, role: SpaceRole): ISpace {
  return {
    id,
    name,
    slug,
    description,
    logo: null,
    hostname: 'acme',
    creatorId: user.id,
    createdAt: new Date('2025-03-01T10:00:00Z'),
    updatedAt: new Date('2026-08-12T10:00:00Z'),
    memberCount: 12,
    membership: { userId: user.id, role },
  };
}

export const spaces: ISpace[] = [
  space('0198a1c2-6b20-7e01-9a01-000000000001', 'Engineering', 'engineering', 'Architecture, runbooks and RFCs', SpaceRole.ADMIN),
  space('0198a1c2-6b20-7e01-9a01-000000000002', 'Product', 'product', 'Roadmaps and product specs', SpaceRole.WRITER),
  space('0198a1c2-6b20-7e01-9a01-000000000003', 'Marketing', 'marketing', 'Campaigns and brand guidelines', SpaceRole.WRITER),
  space('0198a1c2-6b20-7e01-9a01-000000000004', 'Company Handbook', 'handbook', 'Policies and how we work', SpaceRole.READER),
];

function page(
  id: string,
  slugId: string,
  title: string,
  icon: string | null,
  owner: ISpace,
  updatedAt: string,
  hasChildren = false,
  parentPageId: string | null = null,
): IPage {
  return {
    id,
    slugId,
    title,
    content: null,
    icon,
    coverPhoto: null,
    parentPageId,
    creatorId: user.id,
    spaceId: owner.id,
    workspaceId: WORKSPACE_ID,
    isLocked: false,
    isBase: false,
    lastUpdatedById: user.id,
    createdAt: new Date('2026-01-10T10:00:00Z'),
    updatedAt: new Date(updatedAt),
    deletedAt: null,
    position: 'a0',
    hasChildren,
    creator: { id: user.id, name: user.name, avatarUrl: null },
    lastUpdatedBy: { id: user.id, name: user.name, avatarUrl: null },
    deletedBy: null,
    space: { id: owner.id, name: owner.name, slug: owner.slug },
  };
}

const [engineering, product, marketing] = spaces;

export const pages: IPage[] = [
  page('0198a1c2-7c30-7f01-8b01-000000000001', 'k3Jd8sLq2x', 'Onboarding guide', '👋', engineering, '2026-10-19T14:20:00Z', true),
  page('0198a1c2-7c30-7f01-8b01-000000000002', 'p9Wm2nQz7c', 'API design guidelines', '📐', engineering, '2026-10-18T11:05:00Z', true),
  page('0198a1c2-7c30-7f01-8b01-000000000003', 'v4Tr6yHb1m', 'Q4 roadmap', '🗺️', product, '2026-10-17T16:45:00Z'),
  page('0198a1c2-7c30-7f01-8b01-000000000004', 'd8Ks3fGh5j', 'Incident runbook', null, engineering, '2026-10-15T09:30:00Z'),
  page('0198a1c2-7c30-7f01-8b01-000000000005', 'x2Lp7aCe4n', 'Brand voice and tone', '🎨', marketing, '2026-10-12T13:10:00Z'),
];

export const childPages: IPage[] = [
  page('0198a1c2-7c30-7f01-8b01-000000000011', 'a1Bc2dE3fG', 'Local development setup', '💻', engineering, '2026-10-16T10:00:00Z', false, pages[0].id),
  page('0198a1c2-7c30-7f01-8b01-000000000012', 'h4Ij5kL6mN', 'Code review checklist', '✅', engineering, '2026-10-14T10:00:00Z', false, pages[0].id),
];

export const favoriteSpaces: IFavorite[] = spaces.slice(0, 3).map((s, index) => ({
  id: `0198a1c2-8d40-7a01-9c01-00000000000${index + 1}`,
  userId: user.id,
  pageId: null,
  spaceId: s.id,
  templateId: null,
  type: 'space',
  workspaceId: WORKSPACE_ID,
  createdAt: '2026-06-01T10:00:00Z',
  space: { id: s.id, name: s.name, slug: s.slug, logo: null },
}));

export const apiKeys: IApiKey[] = [
  {
    id: '0198a1c2-9e50-7b01-8d01-000000000001',
    name: 'CI deploy bot',
    creatorId: user.id,
    workspaceId: WORKSPACE_ID,
    expiresAt: '2027-03-31T00:00:00Z',
    lastUsedAt: '2026-10-19T07:55:00Z',
    createdAt: '2026-04-02T10:00:00Z',
    creator: { id: user.id, name: user.name, avatarUrl: null },
  },
  {
    id: '0198a1c2-9e50-7b01-8d01-000000000002',
    name: 'Zapier integration',
    creatorId: user.id,
    workspaceId: WORKSPACE_ID,
    expiresAt: null,
    lastUsedAt: '2026-10-11T18:20:00Z',
    createdAt: '2026-02-14T10:00:00Z',
    creator: { id: user.id, name: user.name, avatarUrl: null },
  },
  {
    id: '0198a1c2-9e50-7b01-8d01-000000000003',
    name: 'Analytics export',
    creatorId: user.id,
    workspaceId: WORKSPACE_ID,
    expiresAt: '2026-01-31T00:00:00Z',
    lastUsedAt: null,
    createdAt: '2025-11-20T10:00:00Z',
    creator: { id: user.id, name: user.name, avatarUrl: null },
  },
];

/** What the create endpoint returns: the only time the token is shown. */
export const createdApiKey: IApiKey = {
  ...apiKeys[0],
  token: 'dm_live_8f3K2pQ9xV7mT4bN6cR1sW5yZ0aE3hJ2',
};

/** Chat dates are relative to now, so the sidebar groups them into Today, Previous 7 days, and older. */
function daysAgo(days: number, hours = 0): string {
  return new Date(Date.now() - days * 86_400_000 - hours * 3_600_000).toISOString();
}

export const chats: AiChat[] = [
  { id: '0198a1c2-af60-7c01-8e01-000000000001', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'Summarize the Q4 roadmap', createdAt: daysAgo(0, 1), updatedAt: daysAgo(0, 1) },
  { id: '0198a1c2-af60-7c01-8e01-000000000002', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'Draft an incident postmortem', createdAt: daysAgo(0, 3), updatedAt: daysAgo(0, 3) },
  { id: '0198a1c2-af60-7c01-8e01-000000000003', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'API pagination conventions', createdAt: daysAgo(3), updatedAt: daysAgo(3) },
  { id: '0198a1c2-af60-7c01-8e01-000000000004', workspaceId: WORKSPACE_ID, creatorId: user.id, title: null, createdAt: daysAgo(5), updatedAt: daysAgo(5) },
  { id: '0198a1c2-af60-7c01-8e01-000000000005', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'Onboarding checklist for new hires', createdAt: daysAgo(20), updatedAt: daysAgo(20) },
];

export const toolCalls: AiChatToolCall[] = [
  { id: 'call_1', name: 'search_pages', args: { query: 'Q4 roadmap' }, result: { items: [{ id: pages[2].id, title: 'Q4 roadmap' }] } },
  { id: 'call_2', name: 'get_page', args: { pageId: pages[2].id }, result: { title: 'Q4 roadmap', content: '…' } },
];

export const chatMessages: AiChatMessage[] = [
  {
    id: '0198a1c2-b070-7d01-8f01-000000000001',
    chatId: chats[0].id,
    role: 'user',
    content: 'Summarize the Q4 roadmap in three bullet points.',
    toolCalls: null,
    metadata: null,
    createdAt: daysAgo(0, 1),
  },
  {
    id: '0198a1c2-b070-7d01-8f01-000000000002',
    chatId: chats[0].id,
    role: 'assistant',
    content:
      'Here is a summary of the **Q4 roadmap**:\n\n' +
      '- **Search**: ship semantic search to all workspaces by mid-November.\n' +
      '- **Editor**: launch database views and inline comments on tables.\n' +
      '- **Platform**: migrate file storage to the new region and cut p95 latency by 30%.\n\n' +
      'See [Q4 roadmap](/s/product/p/q4-roadmap-v4Tr6yHb1m) for the full plan.',
    toolCalls,
    metadata: null,
    createdAt: daysAgo(0, 1),
  },
];
