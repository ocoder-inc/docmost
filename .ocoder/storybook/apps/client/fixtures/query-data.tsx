import { useState } from 'react';
import type { Decorator } from '@storybook/react-vite';
import type { QueryKey } from '@tanstack/react-query';
import { storyQueryClient } from '../.storybook/providers';

/**
 * Seeds the story query client before the component mounts, so hooks that would fetch read the
 * fixture instead. Seeded keys never go stale, so nothing refetches against the missing backend.
 */
export function withQueryData(entries: Array<[QueryKey, unknown]>): Decorator {
  return (Story) => {
    useState(() => {
      for (const [key, data] of entries) {
        storyQueryClient.setQueryDefaults(key, { staleTime: Infinity });
        storyQueryClient.setQueryData(key, data);
      }
      return null;
    });
    return <Story />;
  };
}
