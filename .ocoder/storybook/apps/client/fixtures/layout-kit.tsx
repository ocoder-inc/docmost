// Data and state for the global layout stories (header, sidebar, app shell).
import { useState, type ReactNode } from 'react';
import { getDefaultStore, type WritableAtom } from 'jotai';
import type { Decorator } from '@storybook/react-vite';

import type { QueryEntry } from './story-kit';

/** The favourite spaces the global sidebar lists, as `GET /favorites?type=space` answers. */
export const favoriteSpacesPage = {
  items: [
    {
      id: '01964d2a-f001-7c1e-9a4d-2b5e8f6c3a10',
      userId: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
      pageId: null,
      spaceId: 'sp-eng',
      templateId: null,
      type: 'space',
      workspaceId: '01964d2a-0000-7c1e-9a4d-2b5e8f6c3a10',
      createdAt: '2026-09-01T10:00:00Z',
      space: { id: 'sp-eng', name: 'Engineering', slug: 'engineering', logo: null },
    },
    {
      id: '01964d2a-f002-7c1e-9a4d-2b5e8f6c3a10',
      userId: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
      pageId: null,
      spaceId: 'sp-product',
      templateId: null,
      type: 'space',
      workspaceId: '01964d2a-0000-7c1e-9a4d-2b5e8f6c3a10',
      createdAt: '2026-09-03T10:00:00Z',
      space: { id: 'sp-product', name: 'Product', slug: 'product', logo: null },
    },
    {
      id: '01964d2a-f003-7c1e-9a4d-2b5e8f6c3a10',
      userId: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
      pageId: null,
      spaceId: 'sp-design',
      templateId: null,
      type: 'space',
      workspaceId: '01964d2a-0000-7c1e-9a4d-2b5e8f6c3a10',
      createdAt: '2026-09-05T10:00:00Z',
      space: { id: 'sp-design', name: 'Design', slug: 'design', logo: null },
    },
  ],
  meta: { limit: 15, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null },
};

export const favoriteSpacesQuery: QueryEntry = [
  ['favorites', 'space', undefined],
  { pages: [favoriteSpacesPage], pageParams: [undefined] },
];

export const noFavoriteSpacesQuery: QueryEntry = [
  ['favorites', 'space', undefined],
  { pages: [{ items: [], meta: favoriteSpacesPage.meta }], pageParams: [undefined] },
];

export const unreadCountQuery = (count: number): QueryEntry => [['notifications', 'unread-count'], { count }];

/** The member has no personal space yet. */
export const personalSpaceQuery: QueryEntry = [['personal-space'], null];

/** Everything the header and sidebar ask the server for. */
export const shellQueries: QueryEntry[] = [favoriteSpacesQuery, unreadCountQuery(3), personalSpaceQuery];

type AnyWritable = WritableAtom<unknown, [unknown], unknown>;

/** Sets jotai atoms in the default store before the story renders. */
export function withAtoms(values: [atom: unknown, value: unknown][]): Decorator {
  function AtomState({ children }: { children: ReactNode }) {
    useState(() => {
      const store = getDefaultStore();
      for (const [atom, value] of values) store.set(atom as AnyWritable, value);
      return null;
    });
    return <>{children}</>;
  }
  return (Story) => (
    <AtomState>
      <Story />
    </AtomState>
  );
}
