import { type ReactNode, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useLocation, useNavigate } from 'react-router-dom';

import App from '@source/apps/client/src/App';
import type { IPublicWorkspace } from '@source/apps/client/src/features/workspace/types/workspace.types';
import { storyQueryClient } from '../.storybook/providers';

const publicWorkspace: IPublicWorkspace = {
  id: '019a2f6e-0000-7000-8000-000000000001',
  name: 'Acme Inc',
  logo: null,
  hostname: 'acme',
  enforceSso: false,
  authProviders: [],
};

/**
 * Opens the app at a route and answers the queries that route makes on load. The signed-in layout
 * opens a WebSocket as soon as the user loads, so the app is shown on its signed-out login route.
 */
function AtRoute({ path, children }: { path: string; children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useState(() => {
    storyQueryClient.setQueryDefaults(['currentUser'], { staleTime: Infinity });
    storyQueryClient.setQueryDefaults(['workspace-public'], { staleTime: Infinity });
    // Not signed in: nothing to redirect to.
    storyQueryClient.setQueryData(['currentUser'], null);
    storyQueryClient.setQueryData(['workspace-public'], publicWorkspace);
  });
  // An effect, not a layout effect: the router subscribes to its history in a layout effect of its own.
  useEffect(() => {
    if (pathname !== path) navigate(path, { replace: true });
  }, [pathname, path, navigate]);
  return pathname === path ? <>{children}</> : null;
}

const meta = {
  title: 'Components/App',
  component: App,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <AtRoute path="/login">
        <Story />
      </AtRoute>
    ),
  ],
};
