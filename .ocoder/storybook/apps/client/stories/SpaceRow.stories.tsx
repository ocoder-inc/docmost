import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SpaceRow } from '@source/apps/client/src/components/ui/destination-picker/space-row';
import { inBox } from '../fixtures/decorators';
import { spaces } from '../fixtures/data';

const meta = {
  title: 'Components/SpaceRow',
  component: SpaceRow,
  // One row of the destination picker's list.
  decorators: [inBox({ width: 510 })],
  args: { onSelectSpace: fn(), onSelectPage: fn(), limit: 15, selectedId: null },
} satisfies Meta<typeof SpaceRow>;
export default meta;
type Story = StoryObj<typeof meta>;

// A space the user can write to.
export const Default: Story = {
  args: { space: spaces[0] },
};

export const Selected: Story = {
  args: { space: spaces[0], selectedId: spaces[0].id },
};

// A space where the user is only a reader cannot be chosen.
export const ReadOnly: Story = {
  args: {
    space: { ...spaces[3], membership: { userId: spaces[3].creatorId, role: 'reader' } } as typeof spaces[3],
  },
};
