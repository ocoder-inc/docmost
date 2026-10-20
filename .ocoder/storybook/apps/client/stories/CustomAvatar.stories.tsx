import type { Meta, StoryObj } from '@storybook/react-vite';

import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

const meta = {
  title: 'Components/CustomAvatar',
  component: CustomAvatar,
} satisfies Meta<typeof CustomAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

// A member without an uploaded avatar: their initials in a colour picked from their name.
export const Default: Story = {
  args: { name: 'Jordan Rivera', size: 'md' },
};

// The workspace icon in the header's workspace menu.
export const WorkspaceIcon: Story = {
  args: { name: 'Acme Inc', variant: 'filled', size: 'sm', type: AvatarIconType.WORKSPACE_ICON },
};
