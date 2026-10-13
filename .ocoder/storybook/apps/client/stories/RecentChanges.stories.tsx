import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { storyQueryClient } from '../.storybook/providers';
import { recentPagesResponse } from '../fixtures/recent-pages';

/** Seeds the infinite query the component reads, as the API would answer `/pages/recent`. */
function seedRecentChanges(spaceId: string | undefined, response: typeof recentPagesResponse) {
  storyQueryClient.setQueryDefaults(['recent-changes'], { staleTime: Infinity });
  storyQueryClient.setQueryData(['recent-changes', spaceId], {
    pages: [response],
    pageParams: [undefined],
  });
}

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      useState(() => seedRecentChanges(undefined, recentPagesResponse));
      return <Story />;
    },
  ],
};

export const InSpace: Story = {
  args: { spaceId: 'space-eng' },
  decorators: [
    (Story) => {
      useState(() =>
        seedRecentChanges('space-eng', {
          ...recentPagesResponse,
          items: recentPagesResponse.items.filter((p) => p.spaceId === 'space-eng'),
        }),
      );
      return <Story />;
    },
  ],
};

export const Empty: Story = {
  decorators: [
    (Story) => {
      useState(() => seedRecentChanges(undefined, { ...recentPagesResponse, items: [] }));
      return <Story />;
    },
  ],
};
