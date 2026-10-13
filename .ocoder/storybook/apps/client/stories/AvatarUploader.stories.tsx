import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

// As on the account profile page: the user's initials until they upload a picture.
export const Default: Story = {
  args: {
    currentImageUrl: null,
    fallbackName: 'Jane Cooper',
    size: '60px',
    type: AvatarIconType.AVATAR,
    onUpload: fn(async () => {}),
    onRemove: fn(async () => {}),
    isLoading: false,
  },
};

export const Uploading: Story = {
  args: { ...Default.args, isLoading: true },
};

// As in workspace settings.
export const WorkspaceIcon: Story = {
  args: {
    ...Default.args,
    fallbackName: 'Acme',
    radius: 'md',
    variant: 'filled',
    type: AvatarIconType.WORKSPACE_ICON,
  },
};
