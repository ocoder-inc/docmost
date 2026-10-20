import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PageRow } from '@source/apps/client/src/components/ui/destination-picker/page-row';
import { inBox } from '../fixtures/decorators';
import { pages } from '../fixtures/data';

const meta = {
  title: 'Components/PageRow',
  component: PageRow,
  // One row of the destination picker's list.
  decorators: [inBox({ width: 510 })],
  args: { onSelect: fn(), limit: 15, depth: 1, selectedId: null },
} satisfies Meta<typeof PageRow>;
export default meta;
type Story = StoryObj<typeof meta>;

// A page with subpages, which can be expanded.
export const Default: Story = {
  args: { page: pages[0] },
};

export const Selected: Story = {
  args: { page: pages[2], selectedId: pages[2].id },
};

// The page being moved cannot be its own destination.
export const Excluded: Story = {
  args: { page: pages[1], excludePageId: pages[1].id },
};
