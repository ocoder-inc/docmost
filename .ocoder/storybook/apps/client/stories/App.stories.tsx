import { type ReactNode, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useLocation, useNavigate } from 'react-router-dom';

import App from '@source/apps/client/src/App';
import { withQueryData } from '../fixtures/query-data';

/** Moves the story router to `path` before the app renders its routes. */
function AtRoute({ path, children }: { path: string; children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== path) navigate(path, { replace: true });
  }, [pathname, path, navigate]);
  return pathname === path ? <>{children}</> : null;
}

const meta = {
  title: 'Components/App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

// A signed-out visitor lands on the login page; there is no session for the authenticated layout.
export const Default: Story = {
  decorators: [
    (Story) => (
      <AtRoute path="/login">
        <Story />
      </AtRoute>
    ),
    withQueryData([
      [['currentUser'], null],
      [
        ['workspace-public'],
        {
          id: 'ws-1',
          name: 'Acme Inc',
          logo: null,
          hostname: 'acme',
          enforceSso: false,
          authProviders: [{ id: 'ap-1', name: 'Google', type: 'google' }],
        },
      ],
    ]),
  ],
};
