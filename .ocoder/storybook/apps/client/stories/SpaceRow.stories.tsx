import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SpaceRow } from '@source/apps/client/src/components/ui/destination-picker/space-row';
import { sampleSpaces } from '../fixtures/data';

const meta = {
  title: 'Components/SpaceRow',
  component: SpaceRow,
  // A row of the destination picker's list, in its 550px modal.
  decorators: [(Story) => <div style={{ width: 502 }}><Story /></div>],
  args: { limit: 15, selectedId: null, onSelectSpace: fn(), onSelectPage: fn() },
} satisfies Meta<typeof SpaceRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { space: sampleSpaces[0] },
};

export const Selected: Story = {
  args: { space: sampleSpaces[1], selectedId: sampleSpaces[1].id },
};

// The user can only read this space, so it cannot be a destination.
export const ReadOnly: Story = {
  args: { space: sampleSpaces[2] },
};
