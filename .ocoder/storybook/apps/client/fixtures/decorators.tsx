// Story decorators for the app state a component reads besides its props.
import { useState } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { useStore, type WritableAtom } from 'jotai';
import { Route, Routes } from 'react-router-dom';
import { MantineThemeProvider, mergeThemeOverrides, useMantineTheme } from '@mantine/core';

import { setApiRoutes, type Routes as ApiRoutes } from './api';

/** Answers these API routes with the given data for this story only. */
export function withApi(routes: ApiRoutes): Decorator {
  return (Story) => {
    useState(() => setApiRoutes(routes));
    return <Story />;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyWritableAtom = WritableAtom<any, [any], unknown>;

/** Sets app atoms (sidebar state, the signed-in user, ...) before the story renders. */
export function withAtoms(values: [AnyWritableAtom, unknown][]): Decorator {
  return (Story) => {
    const store = useStore();
    useState(() => values.forEach(([atom, value]) => store.set(atom, value)));
    return <Story />;
  };
}

/** Puts the story in a box the size the app gives it. */
export function inBox(style: React.CSSProperties): Decorator {
  return (Story) => (
    <div style={style}>
      <Story />
    </div>
  );
}

/**
 * Renders modals in place instead of in a portal on <body>, so an open modal is part of the story's
 * root, over a page-sized area standing for the page it opens on. They still cover the frame with
 * their overlay, as in the app.
 */
export const modalsInline: Decorator = (Story) => {
  const theme = useMantineTheme();
  const inline = mergeThemeOverrides(theme, {
    components: {
      Modal: { defaultProps: { withinPortal: false } },
      ModalRoot: { defaultProps: { withinPortal: false } },
    },
  });
  return (
    <MantineThemeProvider theme={inline}>
      <div style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    </MantineThemeProvider>
  );
};

/** Matches the story against one of the app's route patterns, so it can read the URL's params. */
export function atRoutePattern(path: string): Decorator {
  return (Story) => (
    <Routes>
      <Route path={path} element={<Story />} />
    </Routes>
  );
}

/** The background the app shell gives its header, navbar and aside. */
export const shellBackground = 'light-dark(#f6f7f9, var(--mantine-color-dark-8))';
