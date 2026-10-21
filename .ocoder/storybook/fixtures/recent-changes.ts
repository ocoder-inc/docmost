const engineering = { id: '01965f2b-4a10-7e3c-8d55-6b7c9e2f1a03', name: 'Engineering', slug: 'engineering' };
const product = { id: '01965f2b-5b21-7f4d-9e66-7c8d0f3a2b14', name: 'Product', slug: 'product' };

function page(
  n: number,
  title: string,
  space: typeof engineering,
  updatedAt: string,
  extra: { icon?: string; isBase?: boolean } = {},
) {
  return {
    id: `01965f3a-7c2e-7d41-9b8e-3f2a1c0d9e4${n}`,
    slugId: `q8Xk2Lp${n}Za`,
    title,
    icon: extra.icon ?? null,
    isBase: extra.isBase ?? false,
    spaceId: space.id,
    space,
    updatedAt: new Date(updatedAt),
    createdAt: new Date(updatedAt),
  };
}

export const recentPages = [
  page(1, 'Onboarding guide', engineering, '2026-10-14T15:42:00Z', { icon: '👋' }),
  page(2, 'Q4 roadmap', product, '2026-10-13T09:10:00Z'),
  page(3, 'Release checklist', engineering, '2026-10-10T17:25:00Z', { icon: '✅' }),
  page(4, 'Feature requests', product, '2026-10-08T11:03:00Z', { isBase: true }),
  page(5, 'Incident postmortem: search outage', engineering, '2026-10-02T08:47:00Z'),
];

/** The shape `useRecentChangesQuery` caches: an infinite query of cursor-paginated pages. */
export function recentChangesData(items = recentPages, hasNextPage = false) {
  return {
    pages: [{ items, meta: { limit: 15, hasNextPage, hasPrevPage: false, nextCursor: hasNextPage ? 'cursor-2' : null, prevCursor: null } }],
    pageParams: [undefined],
  };
}
