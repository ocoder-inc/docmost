import type { Meta, StoryObj } from '@storybook/react-vite';

import PageListSkeleton from '@source/apps/client/src/components/ui/page-list-skeleton';

const meta = {
  title: 'Components/PageListSkeleton',
  component: PageListSkeleton,
} satisfies Meta<typeof PageListSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
