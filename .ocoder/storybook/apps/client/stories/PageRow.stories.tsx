import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PageRow } from '@source/apps/client/src/components/ui/destination-picker/page-row';
import { samplePages } from '../fixtures/data';

const meta = {
  title: 'Components/PageRow',
  component: PageRow,
  // A page under a space in the destination picker, in its 550px modal.
  decorators: [(Story) => <div style={{ width: 502 }}><Story /></div>],
  args: { depth: 1, limit: 15, selectedId: null, onSelect: fn() },
} satisfies Meta<typeof PageRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { page: samplePages[0] },
};

export const Selected: Story = {
  args: { page: samplePages[2], selectedId: samplePages[2].id },
};

// The page being moved cannot be its own destination.
export const Excluded: Story = {
  args: { page: samplePages[1], excludePageId: samplePages[1].id },
};
