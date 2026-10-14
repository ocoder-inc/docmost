import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { paginated, recentPages } from '../fixtures/pages';

/** Seeds the recent-changes query the component reads, so it renders without the API. */
function SeedRecentChanges({ spaceId, pages, hasNextPage, children }: { spaceId?: string; pages: typeof recentPages; hasNextPage?: boolean; children: ReactNode }) {
  const queryClient = useQueryClient();
  useState(() => {
    queryClient.setQueryDefaults(['recent-changes'], { staleTime: Infinity });
    queryClient.setQueryData(['recent-changes', spaceId], {
      pages: [paginated(pages, hasNextPage)],
      pageParams: [undefined],
    });
  });
  return <>{children}</>;
}

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
  decorators: [
    (Story, { args, parameters }) => (
      <SeedRecentChanges spaceId={args.spaceId} pages={parameters.pages ?? recentPages} hasNextPage={parameters.hasNextPage}>
        <Story />
      </SeedRecentChanges>
    ),
  ],
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InSpace: Story = {
  args: { spaceId: 'sp_eng' },
  parameters: { pages: recentPages.filter((p) => p.spaceId === 'sp_eng'), hasNextPage: true },
};

export const Empty: Story = {
  parameters: { pages: [] },
};
