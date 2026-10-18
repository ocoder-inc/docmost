import type { Meta, StoryObj } from '@storybook/react-vite';
import { rem } from '@mantine/core';

import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';

const meta = {
  title: 'Components/CustomAvatar',
  component: CustomAvatar,
} satisfies Meta<typeof CustomAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

// A member without a profile photo, as in the page-permission list: light initials avatar.
export const Default: Story = {
  args: { name: 'Jane Cooper' },
};

// A space without an icon on the home page's space cards: filled initials avatar.
export const SpaceIcon: Story = {
  args: {
    name: 'Engineering',
    color: 'initials',
    variant: 'filled',
    size: 'md',
    mt: rem(-20),
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: 24 }}>
        <Story />
      </div>
    ),
  ],
};
