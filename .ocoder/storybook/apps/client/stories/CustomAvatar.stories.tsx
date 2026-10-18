import type { Meta, StoryObj } from '@storybook/react-vite';

import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';

const meta = {
  title: 'Components/CustomAvatar',
  component: CustomAvatar,
} satisfies Meta<typeof CustomAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
