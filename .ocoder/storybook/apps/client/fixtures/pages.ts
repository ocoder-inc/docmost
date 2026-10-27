import type { IPage } from '@source/apps/client/src/features/page/types/page.types';
import type { IPagination } from '@source/apps/client/src/lib/types';

const hoursAgo = (h: number) => new Date(Date.now() - h * 3600_000);

const engineering = { id: 'sp-1', name: 'Engineering', slug: 'engineering' };
const product = { id: 'sp-2', name: 'Product', slug: 'product' };

export const recentPages = [
  { id: 'pg-1', slugId: 'a1B2c3D4e5', title: 'Onboarding checklist', icon: '🚀', isBase: false, updatedAt: hoursAgo(1), space: engineering },
  { id: 'pg-2', slugId: 'f6G7h8I9j0', title: 'Q3 roadmap', icon: null, isBase: false, updatedAt: hoursAgo(5), space: product },
  { id: 'pg-3', slugId: 'k1L2m3N4o5', title: 'Bug triage tracker', icon: null, isBase: true, updatedAt: hoursAgo(30), space: engineering },
  { id: 'pg-4', slugId: 'p6Q7r8S9t0', title: 'API design guidelines', icon: '📘', isBase: false, updatedAt: new Date('2026-09-14T10:24:00Z'), space: engineering },
] as unknown as IPage[];

export const recentChangesData = {
  pages: [
    {
      items: recentPages,
      meta: { limit: 15, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null },
    } as unknown as IPagination<IPage>,
  ],
  pageParams: [undefined],
};
