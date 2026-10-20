import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DestinationPickerModal } from '@source/apps/client/src/components/ui/destination-picker/destination-picker-modal';
import { withPortalInside } from '../fixtures/decorators';
import { sampleSpaces } from '../fixtures/data';

const meta = {
  title: 'Components/DestinationPickerModal',
  component: DestinationPickerModal,
  decorators: [withPortalInside],
  args: { opened: true, onClose: fn(), onSelect: fn() },
} satisfies Meta<typeof DestinationPickerModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// As opened from a template's "Use template" action.
export const Default: Story = {
  args: {
    title: 'Choose destination',
    actionLabel: 'Create page',
    initialSpaceId: sampleSpaces[0].id,
    searchSpacesOnly: true,
  },
};

export const MovePage: Story = {
  args: { title: 'Move page', actionLabel: 'Move' },
};
