import type { Meta, StoryObj } from '@storybook/react-vite';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

// As on the account settings page (account-avatar.tsx): a user with no uploaded image yet.
export const Default: Story = {
  args: {
    currentImageUrl: null,
    fallbackName: 'Jane Cooper',
    size: '60px',
    type: AvatarIconType.AVATAR,
    onUpload: async () => {},
    onRemove: async () => {},
    isLoading: false,
  },
};

// As in workspace settings (workspace-icon.tsx), while an upload is in progress.
export const WorkspaceIconUploading: Story = {
  args: {
    currentImageUrl: null,
    fallbackName: 'Acme Corp',
    size: '60px',
    radius: 'md',
    variant: 'filled',
    type: AvatarIconType.WORKSPACE_ICON,
    onUpload: async () => {},
    onRemove: async () => {},
    isLoading: true,
  },
};
