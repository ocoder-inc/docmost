import type { Meta, StoryObj } from '@storybook/react-vite';

import { DestinationPickerModal } from '@source/apps/client/src/components/ui/destination-picker/destination-picker-modal';

const meta = {
  title: 'Components/DestinationPickerModal',
  component: DestinationPickerModal,
} satisfies Meta<typeof DestinationPickerModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
