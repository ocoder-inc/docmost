import type { IPage } from '@source/apps/client/src/features/page/types/page.types';
import type { IPagination } from '@source/apps/client/src/lib/types';

const engineering = { id: 'space-eng', name: 'Engineering', slug: 'engineering' };
const product = { id: 'space-prod', name: 'Product', slug: 'product' };

function page(id: string, title: string, icon: string, space: typeof engineering, updatedAt: string, isBase = false): IPage {
  return {
    id,
    slugId: `s${id}`,
    title,
    icon,
    isBase,
    spaceId: space.id,
    space,
    updatedAt: new Date(updatedAt),
    createdAt: new Date('2026-09-01T09:00:00Z'),
  } as IPage;
}

export const recentPages: IPage[] = [
  page('p1', 'Onboarding guide', '🚀', engineering, '2026-10-12T15:42:00Z'),
  page('p2', 'Q4 roadmap', '🗺️', product, '2026-10-11T10:05:00Z'),
  page('p3', 'Incident postmortem: API latency', '', engineering, '2026-10-09T08:30:00Z'),
  page('p4', 'Feature requests', '', product, '2026-10-02T17:12:00Z', true),
];

export const recentPagesResponse: IPagination<IPage> = {
  items: recentPages,
  meta: { limit: 15, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null },
} as IPagination<IPage>;
