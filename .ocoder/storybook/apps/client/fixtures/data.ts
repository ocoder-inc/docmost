import type { IPage } from '@source/apps/client/src/features/page/types/page.types';
import type { IPagination } from '@source/apps/client/src/lib/types';
import type { IPublicWorkspace } from '@source/apps/client/src/features/workspace/types/workspace.types';
import type { IUser } from '@source/apps/client/src/features/user/types/user.types';

export const sampleUser: Partial<IUser> = {
  id: '01964a7e-3f1c-7b52-9d0a-2c4e8f6a1b30',
  name: 'Jane Cooper',
  email: 'jane.cooper@acme.dev',
  avatarUrl: null,
  role: 'admin',
  locale: 'en-US',
};

export const publicWorkspace: IPublicWorkspace = {
  id: '01964a7e-1a2b-7c3d-8e4f-5a6b7c8d9e0f',
  name: 'Acme',
  logo: null,
  hostname: 'acme',
  enforceSso: false,
  authProviders: [],
};

const engineering = { id: 'sp-eng', name: 'Engineering', slug: 'engineering' };
const product = { id: 'sp-product', name: 'Product', slug: 'product' };
const handbook = { id: 'sp-handbook', name: 'Handbook', slug: 'handbook' };

function page(
  id: string,
  title: string | null,
  space: typeof engineering,
  updatedAt: string,
  extra: Partial<IPage> = {},
): IPage {
  return {
    id,
    slugId: id.slice(-10),
    title,
    icon: null,
    isBase: false,
    spaceId: space.id,
    space,
    updatedAt: new Date(updatedAt),
    createdAt: new Date(updatedAt),
    ...extra,
  } as IPage;
}

export const recentPages: IPage[] = [
  page('pg-01-q3roadmap', 'Q3 Product Roadmap', product, '2025-09-18T14:32:00Z', { icon: '🗺️' }),
  page('pg-02-oncall00', 'On-call Runbook', engineering, '2025-09-18T09:05:00Z'),
  page('pg-03-launches', 'Launch Tracker', product, '2025-09-17T16:47:00Z', { isBase: true }),
  page('pg-04-onboard0', 'New Hire Onboarding', handbook, '2025-09-15T11:20:00Z', { icon: '👋' }),
  page('pg-05-apidesgn', 'API Design Guidelines', engineering, '2025-09-12T08:10:00Z'),
  page('pg-06-untitled', null, engineering, '2025-09-10T17:55:00Z'),
];

export const recentChangesResult = (items: IPage[], hasNextPage = false) => ({
  pages: [
    {
      items,
      meta: {
        limit: 15,
        hasNextPage,
        hasPrevPage: false,
        nextCursor: hasNextPage ? 'cursor-2' : null,
        prevCursor: null,
      },
    } satisfies IPagination<IPage>,
  ],
  pageParams: [undefined],
});
