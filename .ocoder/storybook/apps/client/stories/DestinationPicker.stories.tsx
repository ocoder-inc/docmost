import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DestinationPicker } from '@source/apps/client/src/components/ui/destination-picker/destination-picker';
import { inBox } from '../fixtures/decorators';
import { spaces } from '../fixtures/data';

const meta = {
  title: 'Components/DestinationPicker',
  component: DestinationPicker,
  // The body of the 550px "Choose destination" modal.
  decorators: [inBox({ width: 510 })],
  args: { onSelectionChange: fn() },
} satisfies Meta<typeof DestinationPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

// Every space the user can write to, the template's space preselected.
export const Default: Story = {
  args: { initialSpaceId: spaces[0].id, searchSpacesOnly: true },
};
