import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import { storyQueryClient } from '../.storybook/providers';

function RecentChangesSample() {
  storyQueryClient.setQueryDefaults(['recent-changes'], { staleTime: Infinity });
  storyQueryClient.setQueryData(['recent-changes', undefined], {
    pages: [{
      items: [
        { id: 'page-1', slugId: 'a1b2c3', title: 'Getting started', icon: '📄', isBase: false, updatedAt: new Date('2026-10-14T10:00:00Z'), space: { name: 'Product', slug: 'product' } },
        { id: 'page-2', slugId: 'd4e5f6', title: 'Project notes', icon: null, isBase: false, updatedAt: new Date('2026-10-13T09:00:00Z'), space: { name: 'Product', slug: 'product' } },
      ],
      meta: { hasNextPage: false, nextCursor: null },
    }],
    pageParams: [undefined],
  });
  return <RecentChanges />;
}

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <RecentChangesSample /> };
