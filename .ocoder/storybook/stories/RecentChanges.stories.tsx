import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { infinitePage, withQueryData } from '../fixtures/query-data';
import { recentPages } from '../fixtures/recent-pages';

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

// The home page's "Recent changes" tab, across all spaces.
export const Default: Story = {
  decorators: [withQueryData([[['recent-changes', undefined], infinitePage(recentPages)]])],
};
