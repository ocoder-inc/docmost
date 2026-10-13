import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { recentChangesResult, recentPages } from '../fixtures/data';
import { withQueryData } from '../fixtures/decorators';

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

// The home page's "Recent changes" tab, across all spaces.
export const Default: Story = {
  decorators: [withQueryData([[['recent-changes', undefined], recentChangesResult(recentPages, true)]])],
};

// On a space's home page: no space badge column.
export const InSpace: Story = {
  args: { spaceId: 'sp-eng' },
  decorators: [
    withQueryData([
      [['recent-changes', 'sp-eng'], recentChangesResult(recentPages.filter((p) => p.spaceId === 'sp-eng'))],
    ]),
  ],
};

export const Empty: Story = {
  decorators: [withQueryData([[['recent-changes', undefined], recentChangesResult([])]])],
};
