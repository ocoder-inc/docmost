// Sample data shaped like the Docmost API's responses, used by the mock API and by stories.

const now = '2026-10-18T09:30:00.000Z';
const earlier = '2026-10-12T14:05:00.000Z';

export const sampleWorkspace = {
  id: '01929f2a-0000-7000-8000-00000000a001',
  name: 'Acme Inc',
  description: 'Product documentation and team handbook',
  logo: null,
  hostname: 'acme',
  defaultSpaceId: '01929f2a-0000-7000-8000-00000000b001',
  customDomain: null,
  enableInvite: true,
  settings: {
    ai: { search: true, generative: true, mcp: true, chat: true },
    api: { restrictToAdmins: false },
  },
  status: 'active',
  enforceSso: false,
  stripeCustomerId: null,
  billingEmail: 'billing@acme.com',
  trialEndAt: null,
  createdAt: earlier,
  updatedAt: now,
  emailDomains: ['acme.com'],
  memberCount: 12,
  plan: 'business',
  aiSearch: true,
  generativeAi: true,
  mcpEnabled: true,
  restrictApiToAdmins: false,
} as any;

export const sampleUser = {
  id: '01929f2a-0000-7000-8000-00000000c001',
  name: 'Jane Cooper',
  email: 'jane.cooper@acme.com',
  emailVerifiedAt: earlier,
  avatarUrl: null,
  timezone: 'UTC',
  settings: {
    preferences: { fullPageWidth: false, pageEditMode: 'edit', editorToolbar: true },
  },
  invitedById: null,
  lastLoginAt: now,
  lastActiveAt: now,
  locale: 'en-US',
  createdAt: earlier,
  updatedAt: now,
  role: 'owner',
  workspaceId: sampleWorkspace.id,
  deactivatedAt: null,
  deletedAt: null,
} as any;

export const sampleCurrentUser = { user: sampleUser, workspace: sampleWorkspace };

export const sampleEntitlements = {
  cloud: false,
  tier: 'enterprise' as const,
  features: [
    'sso:custom', 'sso:google', 'mfa', 'api:keys', 'comment:resolution', 'page:permissions', 'ai',
    'import:confluence', 'import:docx', 'import:pdf', 'attachment:indexing', 'security:settings',
    'mcp', 'scim', 'page:verification', 'audit:logs', 'retention', 'sharing:controls', 'templates',
    'comment:viewer', 'spaces:personal', 'export:docx', 'bases', 'oauth', 'ai:controls',
    'mcp:controls',
  ],
};

export const sampleSpaces = [
  {
    id: '01929f2a-0000-7000-8000-00000000b001',
    name: 'Engineering',
    description: 'Architecture notes, runbooks and RFCs',
    logo: null,
    slug: 'engineering',
    hostname: 'acme',
    creatorId: sampleUser.id,
    createdAt: earlier,
    updatedAt: now,
    memberCount: 8,
    membership: {
      userId: sampleUser.id,
      role: 'admin',
      permissions: [
        { action: 'manage', subject: 'settings' },
        { action: 'manage', subject: 'member' },
        { action: 'manage', subject: 'page' },
        { action: 'manage', subject: 'share' },
      ],
    },
  },
  {
    id: '01929f2a-0000-7000-8000-00000000b002',
    name: 'Product',
    description: 'Roadmaps and product specs',
    logo: null,
    slug: 'product',
    hostname: 'acme',
    creatorId: sampleUser.id,
    createdAt: earlier,
    updatedAt: now,
    memberCount: 5,
    membership: {
      userId: sampleUser.id,
      role: 'writer',
      permissions: [{ action: 'manage', subject: 'page' }],
    },
  },
  {
    id: '01929f2a-0000-7000-8000-00000000b003',
    name: 'Handbook',
    description: 'How we work',
    logo: null,
    slug: 'handbook',
    hostname: 'acme',
    creatorId: sampleUser.id,
    createdAt: earlier,
    updatedAt: now,
    memberCount: 12,
    membership: { userId: sampleUser.id, role: 'reader', permissions: [] },
  },
] as any[];

const creator = { id: sampleUser.id, name: sampleUser.name, avatarUrl: null };

function page(id: number, title: string, icon: string, spaceIndex = 0, extra: object = {}) {
  const space = sampleSpaces[spaceIndex];
  return {
    id: `01929f2a-0000-7000-8000-0000000d00${String(id).padStart(2, '0')}`,
    slugId: `p${id}aBcD${id}`,
    title,
    icon,
    coverPhoto: null,
    parentPageId: null,
    creatorId: sampleUser.id,
    spaceId: space.id,
    workspaceId: sampleWorkspace.id,
    isLocked: false,
    lastUpdatedById: sampleUser.id,
    createdAt: earlier,
    updatedAt: now,
    deletedAt: null,
    position: `a${id}`,
    hasChildren: false,
    canEdit: true,
    creator,
    lastUpdatedBy: creator,
    space: { id: space.id, name: space.name, slug: space.slug },
    ...extra,
  };
}

export const samplePages = [
  page(1, 'Getting started', '🚀', 0, { hasChildren: true }),
  page(2, 'Architecture overview', '🏗️', 0, { hasChildren: true }),
  page(3, 'Deployment runbook', '📦', 0),
  page(4, 'Q4 roadmap', '🗺️', 1),
  page(5, 'Onboarding checklist', '✅', 2),
] as any[];

export const sampleChildPages = [
  page(11, 'Local development setup', '💻', 0, { parentPageId: samplePages[0].id }),
  page(12, 'Coding conventions', '📐', 0, { parentPageId: samplePages[0].id }),
] as any[];

export function paginated<T>(items: T[]) {
  return {
    items,
    meta: { limit: 50, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null },
  };
}

export const sampleApiKeys = [
  {
    id: '01929f2a-0000-7000-8000-0000000e0001',
    name: 'CI deploy bot',
    creatorId: sampleUser.id,
    workspaceId: sampleWorkspace.id,
    expiresAt: '2027-04-18T00:00:00.000Z',
    lastUsedAt: '2026-10-17T22:14:00.000Z',
    createdAt: '2026-04-18T10:00:00.000Z',
    creator,
  },
  {
    id: '01929f2a-0000-7000-8000-0000000e0002',
    name: 'Zapier integration',
    creatorId: sampleUser.id,
    workspaceId: sampleWorkspace.id,
    expiresAt: null,
    lastUsedAt: null,
    createdAt: '2026-09-02T08:30:00.000Z',
    creator,
  },
] as any[];

export const sampleChats = [
  {
    id: '01929f2a-0000-7000-8000-0000000f0001',
    workspaceId: sampleWorkspace.id,
    creatorId: sampleUser.id,
    title: 'Summarize the deployment runbook',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: '01929f2a-0000-7000-8000-0000000f0002',
    workspaceId: sampleWorkspace.id,
    creatorId: sampleUser.id,
    title: 'Draft Q4 roadmap announcement',
    createdAt: '2026-10-15T11:00:00.000Z',
    updatedAt: '2026-10-15T11:00:00.000Z',
  },
  {
    id: '01929f2a-0000-7000-8000-0000000f0003',
    workspaceId: sampleWorkspace.id,
    creatorId: sampleUser.id,
    title: 'Onboarding questions',
    createdAt: '2026-09-01T11:00:00.000Z',
    updatedAt: '2026-09-01T11:00:00.000Z',
  },
];

export const sampleChatMessages = [
  {
    id: '01929f2a-0000-7000-8000-000000100001',
    chatId: sampleChats[0].id,
    role: 'user' as const,
    content: 'Summarize the deployment runbook in three bullet points.',
    toolCalls: null,
    metadata: null,
    createdAt: now,
  },
  {
    id: '01929f2a-0000-7000-8000-000000100002',
    chatId: sampleChats[0].id,
    role: 'assistant' as const,
    content:
      'Here is a summary of the **Deployment runbook**:\n\n- Merge to `main` and wait for CI to pass.\n- Promote the build to staging and run the smoke tests.\n- Roll out to production with a canary at 10% before going to 100%.',
    toolCalls: [
      {
        id: 'call_1',
        name: 'search_pages',
        args: { query: 'deployment runbook' },
        result: { results: [{ id: samplePages[2].id, title: 'Deployment runbook', slugId: samplePages[2].slugId }] },
      },
    ],
    metadata: null,
    createdAt: now,
  },
];
