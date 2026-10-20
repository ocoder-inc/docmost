import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SpaceRow } from '@source/apps/client/src/components/ui/destination-picker/space-row';
import { spaces } from '../fixtures/data';

// A space in the destination picker's list, in its 550px modal.
const meta = {
  title: 'Components/SpaceRow',
  component: SpaceRow,
  decorators: [
    (Story) => (
      <div style={{ width: 502 }}>
        <Story />
      </div>
    ),
  ],
  args: { space: spaces[0], limit: 15, selectedId: null, onSelectSpace: fn(), onSelectPage: fn() },
} satisfies Meta<typeof SpaceRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selectedId: spaces[0].id },
};

/** A space the user can only read: locked, with a tooltip saying why. */
export const ReadOnly: Story = {
  args: { space: spaces[3] },
};
