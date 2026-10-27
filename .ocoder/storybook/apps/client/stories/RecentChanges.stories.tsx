import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { withQueryData } from '../fixtures/query-data';
import { recentChangesData } from '../fixtures/pages';

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

// Across all spaces, as on the home dashboard.
export const Default: Story = {
  decorators: [withQueryData([[['recent-changes', undefined], recentChangesData]])],
};
