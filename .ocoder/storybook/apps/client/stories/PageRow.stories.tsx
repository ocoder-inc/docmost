import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PageRow } from '@source/apps/client/src/components/ui/destination-picker/page-row';
import { pages } from '../fixtures/data';

// A page under its space in the destination picker, in its 550px modal.
const meta = {
  title: 'Components/PageRow',
  component: PageRow,
  decorators: [
    (Story) => (
      <div style={{ width: 502 }}>
        <Story />
      </div>
    ),
  ],
  args: { page: pages[0], depth: 1, limit: 15, selectedId: null, onSelect: fn() },
} satisfies Meta<typeof PageRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** A page with subpages, so it can be expanded. */
export const Default: Story = {};

export const Selected: Story = {
  args: { page: pages[3], selectedId: pages[3].id },
};

/** The page being moved cannot be its own destination. */
export const Excluded: Story = {
  args: { page: pages[3], excludePageId: pages[3].id },
};
