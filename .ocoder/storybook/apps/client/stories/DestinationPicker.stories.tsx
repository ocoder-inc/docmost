import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DestinationPicker } from '@source/apps/client/src/components/ui/destination-picker/destination-picker';
import { sampleSpaces } from '../fixtures/data';

const meta = {
  title: 'Components/DestinationPicker',
  component: DestinationPicker,
  // It fills the body of a 550px move/copy modal.
  decorators: [(Story) => <div style={{ width: 502 }}><Story /></div>],
  args: { onSelectionChange: fn() },
} satisfies Meta<typeof DestinationPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

// The spaces the user belongs to; spaces they can only read are locked.
export const Default: Story = {};

export const PreselectedSpace: Story = {
  args: { initialSpaceId: sampleSpaces[0].id, searchSpacesOnly: true },
};
