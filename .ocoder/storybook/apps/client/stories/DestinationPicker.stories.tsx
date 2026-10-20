import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DestinationPicker } from '@source/apps/client/src/components/ui/destination-picker/destination-picker';
import { spaces } from '../fixtures/data';

// The body of the "Move page" and "Choose destination" modals, which are 550px wide.
const meta = {
  title: 'Components/DestinationPicker',
  component: DestinationPicker,
  decorators: [
    (Story) => (
      <div style={{ width: 502 }}>
        <Story />
      </div>
    ),
  ],
  args: { onSelectionChange: fn() },
} satisfies Meta<typeof DestinationPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Every space the user is a member of; spaces they can only read are locked. */
export const Default: Story = {};

/** Opened for a template, with its space selected. */
export const InitialSpace: Story = {
  args: { initialSpaceId: spaces[0].id, searchSpacesOnly: true },
};
