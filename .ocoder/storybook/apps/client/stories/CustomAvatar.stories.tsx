import type { Meta, StoryObj } from '@storybook/react-vite';

import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

// A user's initials when they have no picture, as in member lists.
const meta = {
  title: 'Components/CustomAvatar',
  component: CustomAvatar,
  args: { name: 'Jane Cooper', size: 'md' },
} satisfies Meta<typeof CustomAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** A space's icon, filled, as in the sidebar's favorite spaces. */
export const SpaceIcon: Story = {
  args: { name: 'Engineering', type: AvatarIconType.SPACE_ICON, color: 'initials', variant: 'filled', size: 20 },
};
