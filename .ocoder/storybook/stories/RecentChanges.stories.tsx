import type { Meta, StoryObj } from '@storybook/react-vite';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { recentChangesData, recentPages } from '../fixtures/recent-changes';

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
  decorators: [
    // There is no API: seed the query the component reads, and keep it fresh so it does not refetch.
    (Story, { args, parameters }) => {
      const queryClient = useQueryClient();
      useState(() => {
        queryClient.setQueryDefaults(['recent-changes'], { staleTime: Infinity });
        queryClient.setQueryData(['recent-changes', args.spaceId], parameters.recentChanges ?? recentChangesData());
      });
      return <Story />;
    },
  ],
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

// As on the home page: pages from every space, each with its space badge.
export const Default: Story = {};

// As on a space's home page: no space badge.
export const InSpace: Story = {
  args: { spaceId: '01965f2b-4a10-7e3c-8d55-6b7c9e2f1a03' },
  parameters: {
    recentChanges: recentChangesData(recentPages.filter((p) => p.space.slug === 'engineering'), true),
  },
};

export const Empty: Story = {
  parameters: { recentChanges: recentChangesData([]) },
};
