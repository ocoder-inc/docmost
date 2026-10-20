import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { withApi } from '../fixtures/decorators';
import { paginate, spaces } from '../fixtures/data';

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

// The home page's "Recently updated" tab, across every space.
export const Default: Story = {};

// A space's home page: the space column is left out.
export const InSpace: Story = {
  args: { spaceId: spaces[0].id },
};

export const Empty: Story = {
  decorators: [withApi({ '/pages/recent': paginate([]) })],
};
