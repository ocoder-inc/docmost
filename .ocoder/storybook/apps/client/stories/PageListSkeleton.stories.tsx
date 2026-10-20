import type { Meta, StoryObj } from '@storybook/react-vite';

import PageListSkeleton from '@source/apps/client/src/components/ui/page-list-skeleton';

const meta = {
  title: 'Components/PageListSkeleton',
  component: PageListSkeleton,
  // Stands in for the recent changes list on the home page, inside its 900px container.
  decorators: [(Story) => <div style={{ maxWidth: 900 }}><Story /></div>],
} satisfies Meta<typeof PageListSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
