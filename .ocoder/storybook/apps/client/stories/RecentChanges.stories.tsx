import { useState, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useQueryClient } from '@tanstack/react-query';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { recentChangesData, recentPages } from '../fixtures/recent-pages';

/** Puts the recent-changes response in the query cache before the list mounts: there is no server. */
function Seed({ queryKey, data, children }: { queryKey: unknown[]; data: unknown; children: ReactNode }) {
  const client = useQueryClient();
  useState(() => {
    client.setQueryData(queryKey, data);
    client.setQueryDefaults(queryKey, { staleTime: Infinity });
    return null;
  });
  return <>{children}</>;
}

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

// The "Recently updated" tab on the home page: all spaces, so each row shows its space badge.
export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Seed queryKey={['recent-changes', undefined]} data={recentChangesData(recentPages, true)}>
        <Story />
      </Seed>
    ),
  ],
};

// On a space's home page: rows from that space only, no space badge.
export const InSpace: Story = {
  args: { spaceId: 'sp-eng' },
  decorators: [
    (Story) => (
      <Seed
        queryKey={['recent-changes', 'sp-eng']}
        data={recentChangesData(recentPages.filter((p) => p.space.id === 'sp-eng'))}
      >
        <Story />
      </Seed>
    ),
  ],
};

export const Empty: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Seed queryKey={['recent-changes', undefined]} data={recentChangesData([])}>
        <Story />
      </Seed>
    ),
  ],
};
