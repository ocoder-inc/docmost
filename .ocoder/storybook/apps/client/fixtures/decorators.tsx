import { type ReactNode, useEffect, useState } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { type QueryKey, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Puts data in the story's query cache before the component mounts, marked fresh so the component
 * reads it instead of fetching from a backend that is not there.
 */
export function withQueryData(entries: Array<[QueryKey, unknown]>): Decorator {
  function Seed({ children }: { children: ReactNode }) {
    const client = useQueryClient();
    useState(() => {
      for (const [key, data] of entries) {
        client.setQueryDefaults(key, { staleTime: Infinity, gcTime: Infinity });
        client.setQueryData(key, data);
      }
      return true;
    });
    return <>{children}</>;
  }
  return (Story) => (
    <Seed>
      <Story />
    </Seed>
  );
}

/** Moves the story's in-memory router to `path` before rendering the story. */
export function withRoute(path: string): Decorator {
  function Route({ children }: { children: ReactNode }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      if (pathname !== path) navigate(path, { replace: true });
    }, [pathname, navigate]);
    return pathname === path ? <>{children}</> : null;
  }
  return (Story) => (
    <Route>
      <Story />
    </Route>
  );
}
