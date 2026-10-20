import type { Meta, StoryObj } from '@storybook/react-vite';

import PageListSkeleton from '@source/apps/client/src/components/ui/page-list-skeleton';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/PageListSkeleton',
  component: PageListSkeleton,
  // The home page's 900px column while recent pages load.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof PageListSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
