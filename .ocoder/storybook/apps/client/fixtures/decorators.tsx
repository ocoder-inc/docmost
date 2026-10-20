import { useState, type ReactNode } from 'react';
import { MantineThemeProvider } from '@mantine/core';
import type { Decorator } from '@storybook/react-vite';
import { Route, Routes } from 'react-router-dom';

import { useHydrateAtoms } from 'jotai/utils';

import { mockApi } from './mock-api';

/**
 * Modals and drawers render into a portal on <body>. This keeps that portal inside the story's own
 * root, so the story shows (and its checks see) the dialog the way the app opens it.
 */
function PortalInside({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  return (
    // Sized like the window the dialog opens over, so the story root has a visible box.
    <div ref={setTarget} style={{ minHeight: 'calc(100vh - 2rem)' }}>
      {target && (
        <MantineThemeProvider inherit theme={{ components: { Portal: { defaultProps: { target } } } }}>
          {children}
        </MantineThemeProvider>
      )}
    </div>
  );
}

export const withPortalInside: Decorator = (Story) => (
  <PortalInside>
    <Story />
  </PortalInside>
);

/** Answers some API paths differently for this story (see fixtures/mock-api.ts). */
export function withApi(routes: Parameters<typeof mockApi>[0]): Decorator {
  return (Story) => {
    useState(() => mockApi(routes));
    return <Story />;
  };
}

/** The app shell's navbar: 300px wide, the height of the window below the 45px header. */
export const withNavbar: Decorator = (Story) => (
  <div style={{ width: 300, height: 'calc(100vh - 45px)', borderRight: '1px solid var(--mantine-color-default-border)' }}>
    <Story />
  </div>
);

/** Sets jotai atoms (sidebar state, aside tab and the like) before the story renders. */
export function withAtoms(values: Array<readonly [any, unknown]>): Decorator {
  return (Story) => {
    useHydrateAtoms(new Map(values));
    return <Story />;
  };
}

/**
 * Renders the story as the element of an app route, so `useParams` sees that route's params. Pair it
 * with `parameters: { route }` set to a URL that matches the pattern.
 */
export function withRoutePattern(path: string): Decorator {
  return (Story) => (
    <Routes>
      <Route path={path} element={<Story />} />
    </Routes>
  );
}
