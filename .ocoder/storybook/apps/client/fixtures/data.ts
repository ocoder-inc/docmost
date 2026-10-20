// Sample workspace data shaped like the Docmost API's responses, shared by the API stand-in and stories.
import type { ICurrentUser, IUser } from '@source/apps/client/src/features/user/types/user.types';
import type { IWorkspace } from '@source/apps/client/src/features/workspace/types/workspace.types';
import type { ISpace } from '@source/apps/client/src/features/space/types/space.types';
import type { IPage } from '@source/apps/client/src/features/page/types/page.types';
import type { IFavorite } from '@source/apps/client/src/features/favorite/types/favorite.types';
import type { IApiKey } from '@source/apps/client/src/ee/api-key/types/api-key.types';
import type { AiChat, AiChatMessage } from '@source/apps/client/src/ee/ai-chat/types/ai-chat.types';
import type { Entitlements } from '@source/apps/client/src/ee/entitlement/entitlement.types';
import type { IPagination } from '@source/apps/client/src/lib/types';

export const WORKSPACE_ID = '0192e8a1-6b1c-7c3e-9d2f-4a5b6c7d8e01';

export const workspace: IWorkspace = {
  id: WORKSPACE_ID,
  name: 'Acme Inc',
  description: 'Acme product and engineering wiki',
  logo: null as unknown as string,
  hostname: 'acme',
  defaultSpaceId: '0192e8a1-7000-7000-8000-00000000a001',
  customDomain: null as unknown as string,
  enableInvite: true,
  settings: {
    ai: { search: true, generative: true, mcp: true, chat: true, chatReadOnly: false, chatWorkspaceKnowledgeOnly: false },
    api: { restrictToAdmins: false },
    spaces: { allowPersonal: true },
  },
  status: 'active',
  enforceSso: false,
  stripeCustomerId: null as unknown as string,
  billingEmail: 'billing@acme.com',
  trialEndAt: null as unknown as Date,
  createdAt: new Date('2025-02-03T09:12:00.000Z'),
  updatedAt: new Date('2026-09-28T14:40:00.000Z'),
  emailDomains: ['acme.com'],
  memberCount: 24,
  plan: 'business',
};

export const user: IUser = {
  id: '0192e8a1-6b1c-7c3e-9d2f-4a5b6c7d8e10',
  name: 'Jordan Rivera',
  email: 'jordan.rivera@acme.com',
  emailVerifiedAt: new Date('2025-02-03T09:12:00.000Z'),
  avatarUrl: null as unknown as string,
  timezone: 'UTC',
  settings: {
    preferences: { fullPageWidth: false, pageEditMode: 'edit', editorToolbar: true },
  },
  invitedById: null as unknown as string,
  lastLoginAt: '2026-10-19T08:30:00.000Z',
  lastActiveAt: new Date('2026-10-19T16:05:00.000Z'),
  locale: 'en-US',
  createdAt: new Date('2025-02-03T09:12:00.000Z'),
  updatedAt: new Date('2026-10-01T10:00:00.000Z'),
  role: 'owner',
  workspaceId: WORKSPACE_ID,
  deactivatedAt: null as unknown as Date,
  deletedAt: null as unknown as Date,
  fullPageWidth: false,
  pageEditMode: 'edit',
  editorToolbar: true,
  notificationPageUpdates: true,
  notificationPageUserMention: true,
  notificationCommentUserMention: true,
  notificationCommentCreated: true,
  notificationCommentResolved: true,
};

export const currentUser: ICurrentUser = { user, workspace };

/** What a business-tier, self-hosted workspace is entitled to: every enterprise feature the UI gates. */
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

const adminMembership = {
  userId: user.id,
  role: 'admin',
  permissions: [
    { action: 'manage', subject: 'settings' },
    { action: 'manage', subject: 'member' },
    { action: 'manage', subject: 'page' },
    { action: 'manage', subject: 'share' },
  ],
} as unknown as ISpace['membership'];

function space(id: string, name: string, slug: string, description: string, memberCount: number): ISpace {
  return {
    id,
    name,
    description,
    logo: null as unknown as string,
    slug,
    hostname: 'acme',
    creatorId: user.id,
    createdAt: new Date('2025-02-10T10:00:00.000Z'),
    updatedAt: new Date('2026-09-12T10:00:00.000Z'),
    memberCount,
    membership: adminMembership,
  };
}

export const spaces: ISpace[] = [
  space('0192e8a1-7000-7000-8000-00000000a001', 'Engineering', 'engineering', 'Architecture, runbooks and RFCs', 18),
  space('0192e8a1-7000-7000-8000-00000000a002', 'Product', 'product', 'Roadmaps, specs and research', 11),
  space('0192e8a1-7000-7000-8000-00000000a003', 'Marketing', 'marketing', 'Campaigns and brand guidelines', 7),
  space('0192e8a1-7000-7000-8000-00000000a004', 'Handbook', 'handbook', 'How we work at Acme', 24),
];

const person = { id: user.id, name: user.name, avatarUrl: null as unknown as string };

function page(
  id: string,
  slugId: string,
  title: string,
  spaceIndex: number,
  updatedAt: string,
  extra: Partial<IPage> = {},
): IPage {
  const s = spaces[spaceIndex];
  return {
    id,
    slugId,
    title,
    content: null as unknown as string,
    icon: null as unknown as string,
    coverPhoto: null as unknown as string,
    parentPageId: null as unknown as string,
    creatorId: user.id,
    spaceId: s.id,
    workspaceId: WORKSPACE_ID,
    isLocked: false,
    isBase: false,
    lastUpdatedById: user.id,
    createdAt: new Date('2026-08-01T09:00:00.000Z'),
    updatedAt: new Date(updatedAt),
    deletedAt: null as unknown as Date,
    position: 'a0',
    hasChildren: false,
    canEdit: true,
    creator: person,
    lastUpdatedBy: person,
    deletedBy: null as unknown as IPage['deletedBy'],
    space: { id: s.id, name: s.name, slug: s.slug },
    permissions: { canEdit: true, hasRestriction: false },
    ...extra,
  };
}

export const pages: IPage[] = [
  page('0192e8a1-8000-7000-8000-0000000b0001', 'Xk3PqR8sTv', 'Deployment runbook', 0, '2026-10-19T15:20:00.000Z', { icon: '🚀', hasChildren: true }),
  page('0192e8a1-8000-7000-8000-0000000b0002', 'Lm9WnB2cDe', 'Q4 product roadmap', 1, '2026-10-19T11:05:00.000Z', { icon: '🗺️' }),
  page('0192e8a1-8000-7000-8000-0000000b0003', 'Hj4YtU6iOp', 'API authentication RFC', 0, '2026-10-18T17:45:00.000Z', { hasChildren: true }),
  page('0192e8a1-8000-7000-8000-0000000b0004', 'Qa7SdF1gHj', 'Launch checklist', 2, '2026-10-17T09:30:00.000Z', { icon: '✅' }),
  page('0192e8a1-8000-7000-8000-0000000b0005', 'Zx5CvB3nMq', 'Onboarding guide', 3, '2026-10-15T13:10:00.000Z', { icon: '👋', hasChildren: true }),
  page('0192e8a1-8000-7000-8000-0000000b0006', 'Pw2ErT7yUi', 'Customer feedback tracker', 1, '2026-10-12T08:00:00.000Z', { isBase: true }),
];

/** Child pages of the first page, as the sidebar tree returns them. */
export const childPages: IPage[] = [
  page('0192e8a1-8000-7000-8000-0000000b0101', 'Rt8YuI0oPa', 'Rolling back a release', 0, '2026-10-16T10:00:00.000Z', { parentPageId: pages[0].id }),
  page('0192e8a1-8000-7000-8000-0000000b0102', 'Sd1FgH4jKl', 'Database migrations', 0, '2026-10-14T10:00:00.000Z', { parentPageId: pages[0].id, hasChildren: true }),
  page('0192e8a1-8000-7000-8000-0000000b0103', 'Cv6BnM9qWe', 'Feature flags', 0, '2026-10-10T10:00:00.000Z', { parentPageId: pages[0].id }),
];

export const favoriteSpaces: IFavorite[] = spaces.slice(0, 2).map((s, index) => ({
  id: `0192e8a1-9000-7000-8000-0000000f000${index + 1}`,
  userId: user.id,
  pageId: null,
  spaceId: s.id,
  templateId: null,
  type: 'space',
  workspaceId: WORKSPACE_ID,
  createdAt: '2026-09-01T10:00:00.000Z',
  space: { id: s.id, name: s.name, slug: s.slug, logo: null },
}));

export const apiKeys: IApiKey[] = [
  {
    id: '0192e8a1-a000-7000-8000-0000000c0001',
    name: 'CI deploy bot',
    creatorId: user.id,
    workspaceId: WORKSPACE_ID,
    expiresAt: '2027-04-01T00:00:00.000Z',
    lastUsedAt: '2026-10-19T06:12:00.000Z',
    createdAt: '2026-04-01T09:00:00.000Z',
    creator: { id: user.id, name: user.name, email: user.email, avatarUrl: null as unknown as string },
  },
  {
    id: '0192e8a1-a000-7000-8000-0000000c0002',
    name: 'Zapier integration',
    creatorId: user.id,
    workspaceId: WORKSPACE_ID,
    expiresAt: null,
    lastUsedAt: '2026-10-02T14:30:00.000Z',
    createdAt: '2026-06-15T12:00:00.000Z',
    creator: { id: user.id, name: user.name, email: user.email, avatarUrl: null as unknown as string },
  },
  {
    id: '0192e8a1-a000-7000-8000-0000000c0003',
    name: 'Analytics export',
    creatorId: user.id,
    workspaceId: WORKSPACE_ID,
    expiresAt: '2026-12-31T00:00:00.000Z',
    lastUsedAt: null,
    createdAt: '2026-09-20T16:45:00.000Z',
    creator: { id: user.id, name: user.name, email: user.email, avatarUrl: null as unknown as string },
  },
];

export const aiChats: AiChat[] = [
  { id: '0192e8a1-b000-7000-8000-0000000d0001', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'Summarize the deployment runbook', createdAt: '2026-10-19T14:00:00.000Z', updatedAt: '2026-10-19T14:06:00.000Z' },
  { id: '0192e8a1-b000-7000-8000-0000000d0002', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'Draft Q4 launch announcement', createdAt: '2026-10-18T10:00:00.000Z', updatedAt: '2026-10-18T10:20:00.000Z' },
  { id: '0192e8a1-b000-7000-8000-0000000d0003', workspaceId: WORKSPACE_ID, creatorId: user.id, title: 'Which services use the auth RFC?', createdAt: '2026-10-13T09:00:00.000Z', updatedAt: '2026-10-13T09:12:00.000Z' },
  { id: '0192e8a1-b000-7000-8000-0000000d0004', workspaceId: WORKSPACE_ID, creatorId: user.id, title: null, createdAt: '2026-09-02T09:00:00.000Z', updatedAt: '2026-09-02T09:03:00.000Z' },
];

export const aiChatMessages: AiChatMessage[] = [
  {
    id: '0192e8a1-b100-7000-8000-0000000e0001',
    chatId: aiChats[0].id,
    role: 'user',
    content: 'Summarize the deployment runbook in a few bullet points.',
    toolCalls: null,
    metadata: null,
    createdAt: '2026-10-19T14:00:00.000Z',
  },
  {
    id: '0192e8a1-b100-7000-8000-0000000e0002',
    chatId: aiChats[0].id,
    role: 'assistant',
    content:
      'Here is a summary of **Deployment runbook**:\n\n' +
      '- Deploys run from `main` through the CI pipeline, never from a laptop.\n' +
      '- Every release is behind a feature flag and rolled out to 10% first.\n' +
      '- Database migrations ship one release ahead of the code that needs them.\n' +
      '- If error rates rise, follow [Rolling back a release](/s/engineering/p/Rt8YuI0oPa).',
    toolCalls: [
      { id: 'call_1', name: 'search_pages', args: { query: 'deployment runbook' }, result: { count: 3 } },
      { id: 'call_2', name: 'get_page', args: { pageId: pages[0].id }, result: { title: 'Deployment runbook' } },
    ],
    metadata: null,
    createdAt: '2026-10-19T14:00:12.000Z',
  },
];

export function paginate<T>(items: T[], hasNextPage = false): IPagination<T> {
  return {
    items,
    meta: { limit: 30, hasNextPage, hasPrevPage: false, nextCursor: hasNextPage ? 'next' : null, prevCursor: null },
  };
}
