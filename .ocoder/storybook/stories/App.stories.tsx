import type { Meta, StoryObj } from '@storybook/react-vite';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import App from '@source/apps/client/src/App';

const workspace = {
  id: '01965f20-1b3c-7a2d-8e4f-5a6b7c8d9e01',
  name: 'Acme',
  logo: null,
  hostname: 'acme',
  enforceSso: false,
  authProviders: [],
};

const meta = {
  title: 'Components/App',
  component: App,
  decorators: [
    // There is no API: answer the queries the login route makes. Signed out, so it stays on /login
    // (every signed-in route needs the user, workspace, entitlements and a collaboration socket).
    (Story) => {
      const queryClient = useQueryClient();
      useState(() => {
        queryClient.setQueryDefaults(['workspace-public'], { staleTime: Infinity });
        queryClient.setQueryDefaults(['currentUser'], { staleTime: Infinity });
        queryClient.setQueryData(['workspace-public'], workspace);
        queryClient.setQueryData(['currentUser'], null);
      });
      return <Story />;
    },
  ],
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: { route: '/login' },
};
