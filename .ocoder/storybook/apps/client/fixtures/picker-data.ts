// Spaces (GET /api/spaces, IPagination<ISpace>) and sidebar pages (POST /api/pages/sidebar-pages,
// IPagination<IPage>) as the destination picker reads them, trimmed to the fields it uses.
import type { QueryEntry } from './story-kit';

const membership = (role: 'admin' | 'writer' | 'reader') => ({
  userId: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
  role,
  permissions: [],
});

const space = (id: string, name: string, slug: string, role: 'admin' | 'writer' | 'reader', memberCount: number) => ({
  id,
  name,
  slug,
  description: '',
  logo: null,
  hostname: 'acme',
  creatorId: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
  createdAt: '2025-03-02T10:00:00Z',
  updatedAt: '2026-09-12T10:00:00Z',
  memberCount,
  membership: membership(role),
});

export const pickerSpaces = [
  space('sp-eng', 'Engineering', 'engineering', 'admin', 18),
  space('sp-prod', 'Product', 'product', 'writer', 11),
  space('sp-design', 'Design', 'design', 'writer', 6),
  space('sp-hb', 'Company Handbook', 'handbook', 'reader', 24),
] as never[];

export const engineeringSpace = pickerSpaces[0];
export const handbookSpace = pickerSpaces[3];

export const spacesData = (items = pickerSpaces) => ({
  items,
  meta: { limit: 100, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null },
});

const page = (
  id: string,
  title: string,
  icon: string | null,
  hasChildren: boolean,
  parentPageId: string | null = null,
  extra: Record<string, unknown> = {},
) => ({
  id,
  slugId: `${id}-slug`,
  title,
  icon,
  position: 'a0',
  hasChildren,
  isBase: false,
  spaceId: 'sp-eng',
  parentPageId,
  canEdit: true,
  ...extra,
});

/** Top-level pages of the Engineering space. */
export const engineeringRootPages = [
  page('pg-arch', 'Architecture', '🏗️', true),
  page('pg-runbook', 'Deployment runbook', null, false),
  page('pg-oncall', 'On-call handbook', '📟', true),
  page('pg-rfcs', 'RFCs', '📝', true),
  page('pg-triage', 'Bug triage tracker', null, false, null, { isBase: true }),
  page('pg-untitled', '', null, false),
];

/** Children of "Architecture". */
export const architectureChildren = [
  page('pg-arch-overview', 'System overview', null, false, 'pg-arch'),
  page('pg-arch-collab', 'Real-time collaboration', '⚡', true, 'pg-arch'),
  page('pg-arch-storage', 'Storage and attachments', null, false, 'pg-arch'),
];

export const sidebarPagesData = (items: unknown[], nextCursor: string | null = null) => ({
  pages: [
    {
      items,
      meta: { limit: 15, hasNextPage: !!nextCursor, hasPrevPage: false, nextCursor, prevCursor: null },
    },
  ],
  pageParams: [undefined],
});

/** Every query the picker makes, in the keys its hooks use. */
export const pickerQueries: QueryEntry[] = [
  [['spaces', { limit: 100 }], spacesData()],
  [['destination-pages', 'sp-eng', 'root'], sidebarPagesData(engineeringRootPages)],
  [['destination-pages', 'sp-eng', 'pg-arch'], sidebarPagesData(architectureChildren)],
];
