import type { Meta, StoryObj } from '@storybook/react-vite';

import { DestinationPicker } from '@source/apps/client/src/components/ui/destination-picker/destination-picker';

const meta = {
  title: 'Components/DestinationPicker',
  component: DestinationPicker,
} satisfies Meta<typeof DestinationPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
