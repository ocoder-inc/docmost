import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { withApi } from '../.storybook/providers';
import { paginated, spaces } from '../fixtures/data';

// The "Recently updated" tab of the home page, in its 900px column.
const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Across all spaces, with each page's space. */
export const Default: Story = {};

/** On a space's home page the space column is left out. */
export const InSpace: Story = {
  args: { spaceId: spaces[0].id },
};

export const Empty: Story = {
  decorators: [withApi({ '/pages/recent': () => paginated([]) })],
};
