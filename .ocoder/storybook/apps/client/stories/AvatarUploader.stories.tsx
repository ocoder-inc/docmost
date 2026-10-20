import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
  args: {
    onUpload: fn(async () => {}),
    onRemove: fn(async () => {}),
  },
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

// The account settings page: the signed-in user's avatar, showing initials when none is uploaded.
export const Default: Story = {
  args: {
    fallbackName: 'Jordan Rivera',
    size: '60px',
    type: AvatarIconType.AVATAR,
    isLoading: false,
  },
};

// The workspace settings page: a square, filled workspace icon.
export const WorkspaceIcon: Story = {
  args: {
    fallbackName: 'Acme Inc',
    size: '60px',
    radius: 'sm',
    variant: 'filled',
    type: AvatarIconType.WORKSPACE_ICON,
  },
};

export const Uploading: Story = {
  args: {
    fallbackName: 'Jordan Rivera',
    size: '60px',
    type: AvatarIconType.AVATAR,
    isLoading: true,
  },
};
