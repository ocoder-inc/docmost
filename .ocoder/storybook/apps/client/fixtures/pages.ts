import type { IPage } from '@source/apps/client/src/features/page/types/page.types';
import type { IPagination } from '@source/apps/client/src/lib/types';

const engineering = { id: 'sp_eng', name: 'Engineering', slug: 'engineering' };
const product = { id: 'sp_prod', name: 'Product', slug: 'product' };
const handbook = { id: 'sp_hb', name: 'Company Handbook', slug: 'handbook' };

function page(id: string, slugId: string, title: string, space: typeof engineering, updatedAt: string, extra: Partial<IPage> = {}): IPage {
  return {
    id,
    slugId,
    title,
    icon: null,
    isBase: false,
    spaceId: space.id,
    space,
    updatedAt: new Date(updatedAt),
    createdAt: new Date('2026-03-02T09:15:00Z'),
    ...extra,
  } as IPage;
}

export const recentPages: IPage[] = [
  page('pg_1', 'a1B2c3D4e5', 'Q3 Release Plan', product, '2026-09-28T14:32:00Z', { icon: '🚀' }),
  page('pg_2', 'f6G7h8I9j0', 'API Authentication Guide', engineering, '2026-09-27T10:05:00Z'),
  page('pg_3', 'k1L2m3N4o5', 'Bug Triage Board', engineering, '2026-09-25T16:48:00Z', { isBase: true }),
  page('pg_4', 'p6Q7r8S9t0', 'Onboarding Checklist', handbook, '2026-09-22T08:20:00Z', { icon: '✅' }),
  page('pg_5', 'u1V2w3X4y5', 'Incident Postmortem: Search Outage', engineering, '2026-09-19T19:11:00Z'),
  page('pg_6', 'z6A7b8C9d0', 'Untitled', product, '2026-09-15T12:00:00Z', { title: '' }),
];

export function paginated<T>(items: T[], hasNextPage = false): IPagination<T> {
  return {
    items,
    meta: { limit: 15, hasNextPage, hasPrevPage: false, nextCursor: hasNextPage ? 'cursor_2' : null, prevCursor: null },
  };
}
