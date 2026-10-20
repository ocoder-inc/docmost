import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DestinationPickerModal } from '@source/apps/client/src/components/ui/destination-picker/destination-picker-modal';
import { modalsInline } from '../fixtures/decorators';
import { spaces } from '../fixtures/data';

const meta = {
  title: 'Components/DestinationPickerModal',
  component: DestinationPickerModal,
  decorators: [modalsInline],
  args: { opened: true, onClose: fn(), onSelect: fn() },
} satisfies Meta<typeof DestinationPickerModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Creating a page from a template.
export const Default: Story = {
  args: {
    title: 'Choose destination',
    actionLabel: 'Create page',
    initialSpaceId: spaces[0].id,
    searchSpacesOnly: true,
  },
};
