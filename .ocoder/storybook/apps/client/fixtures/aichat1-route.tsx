// Renders a story inside the app route that gives it its URL params (`chatId`, `pageSlug`), the way
// App.tsx mounts it. The story's `parameters.route` sets the URL the in-memory router starts at.
import type { Decorator } from '@storybook/react-vite';
import { Route, Routes } from 'react-router-dom';

export function withRoutePath(path: string): Decorator {
  return (Story) => (
    <Routes>
      <Route path={path} element={<Story />} />
    </Routes>
  );
}

/** A fixed-size box like the one the app gives the component. */
export function withBox(style: React.CSSProperties): Decorator {
  return (Story) => (
    <div style={style}>
      <Story />
    </div>
  );
}
