import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import App from '@source/apps/client/src/App';

/**
 * The signed-in routes open a socket.io connection and a dozen API queries, which cannot run here.
 * The story shows the app as a signed-out visitor sees it: the login route, with the workspace's
 * public data seeded and no current user.
 */
function SignedOut({ path, children }: { path: string; children: ReactNode }) {
  const queryClient = useQueryClient();
  useState(() => {
    for (const key of ['workspace-public', 'currentUser']) {
      queryClient.setQueryDefaults([key], { staleTime: Infinity });
    }
    queryClient.setQueryData(['workspace-public'], {
      id: 'ws_01',
      name: 'Acme Corp',
      logo: null,
      hostname: 'acme',
      enforceSso: false,
      authProviders: [],
    });
    queryClient.setQueryData(['currentUser'], null);
  });
  // App renders its own <Routes>; give it a router at the wanted path in place of the providers' one.
  return (
    <UNSAFE_LocationContext.Provider value={null as never}>
      <MemoryRouter initialEntries={[path]}>{children}</MemoryRouter>
    </UNSAFE_LocationContext.Provider>
  );
}

const meta = {
  title: 'Components/App',
  component: App,
  decorators: [
    (Story, { parameters }) => (
      <SignedOut path={parameters.path ?? '/login'}>
        <Story />
      </SignedOut>
    ),
  ],
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ForgotPassword: Story = {
  parameters: { path: '/forgot-password' },
};
