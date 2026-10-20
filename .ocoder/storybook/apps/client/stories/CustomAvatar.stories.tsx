import type { Meta, StoryObj } from '@storybook/react-vite';

import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';

const meta = {
  title: 'Components/CustomAvatar',
  component: CustomAvatar,
} satisfies Meta<typeof CustomAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

// Without an avatar image it shows the name's initials, as in the top menu.
export const Default: Story = {
  args: { name: 'Jane Cooper', size: 'md', radius: 'xl' },
};

export const Small: Story = {
  args: { name: 'Devon Lane', size: 'sm', variant: 'filled' },
};
