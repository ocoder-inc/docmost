// Pages as returned by POST /api/pages/recent (IPagination<IPage>), trimmed to the fields the list reads.
const engineering = { id: 'sp-eng', name: 'Engineering', slug: 'engineering' };
const product = { id: 'sp-prod', name: 'Product', slug: 'product' };
const handbook = { id: 'sp-hb', name: 'Company Handbook', slug: 'handbook' };

export const recentPages = [
  { id: 'pg-1', slugId: 'a1B2c3D4e5', title: 'Q3 Roadmap', icon: '🗺️', isBase: false, updatedAt: '2026-10-08T14:32:00Z', space: product },
  { id: 'pg-2', slugId: 'f6G7h8I9j0', title: 'Deployment runbook', icon: null, isBase: false, updatedAt: '2026-10-07T09:15:00Z', space: engineering },
  { id: 'pg-3', slugId: 'k1L2m3N4o5', title: 'Bug triage tracker', icon: null, isBase: true, updatedAt: '2026-10-06T17:48:00Z', space: engineering },
  { id: 'pg-4', slugId: 'p6Q7r8S9t0', title: 'Onboarding checklist', icon: '✅', isBase: false, updatedAt: '2026-10-03T11:02:00Z', space: handbook },
  { id: 'pg-5', slugId: 'u1V2w3X4y5', title: '', icon: null, isBase: false, updatedAt: '2026-09-29T08:20:00Z', space: product },
];

export function recentChangesData(items = recentPages, hasNextPage = false) {
  return {
    pages: [
      {
        items,
        meta: { limit: 15, hasNextPage, hasPrevPage: false, nextCursor: hasNextPage ? 'cursor-2' : null, prevCursor: null },
      },
    ],
    pageParams: [undefined],
  };
}
