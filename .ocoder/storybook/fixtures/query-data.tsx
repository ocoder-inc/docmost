import { useState } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { useQueryClient, type QueryKey } from '@tanstack/react-query';

/**
 * Seeds the story's query cache before the story renders, and keeps those entries fresh so the
 * component reads them instead of fetching from the server, which is not there.
 */
export function withQueryData(entries: Array<[QueryKey, unknown]>): Decorator {
  return (Story) => {
    const client = useQueryClient();
    useState(() => {
      for (const [key, data] of entries) {
        client.setQueryDefaults(key, { staleTime: Infinity });
        client.setQueryData(key, data);
      }
      return null;
    });
    return <Story />;
  };
}

/** The shape `useInfiniteQuery` caches: one page of a cursor-paginated response. */
export function infinitePage<T>(items: T[]) {
  return {
    pages: [{ items, meta: { limit: 15, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null } }],
    pageParams: [undefined],
  };
}
