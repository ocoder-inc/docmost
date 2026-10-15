import { useState, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useQueryClient } from '@tanstack/react-query';

import App from '@source/apps/client/src/App';

/** Fills the query cache with what the server would answer, so the page renders without a backend. */
function Seed({ entries, children }: { entries: [unknown[], unknown][]; children: ReactNode }) {
  const client = useQueryClient();
  useState(() => {
    for (const [queryKey, data] of entries) {
      client.setQueryData(queryKey, data);
      client.setQueryDefaults(queryKey, { staleTime: Infinity });
    }
    return null;
  });
  return <>{children}</>;
}

const meta = {
  title: 'Components/App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app's login route for a signed-out visitor of a self-hosted workspace with password login.
export const Default: Story = {
  parameters: { route: '/login', layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <Seed
        entries={[
          [
            ['workspace-public'],
            { id: 'ws-1', name: 'Acme Corp', logo: null, hostname: 'acme', enforceSso: false, authProviders: [] },
          ],
          [['currentUser'], null],
        ]}
      >
        <Story />
      </Seed>
    ),
  ],
};
