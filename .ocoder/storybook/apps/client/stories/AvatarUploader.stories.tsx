import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

// The avatar on the account profile settings page; click it to upload or remove the image.
const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
  args: {
    fallbackName: 'Jane Cooper',
    size: '60px',
    type: AvatarIconType.AVATAR,
    onUpload: fn(async () => {}),
    onRemove: fn(async () => {}),
    isLoading: false,
  },
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The workspace icon in workspace settings: square-ish and filled. */
export const WorkspaceIcon: Story = {
  args: {
    fallbackName: 'Acme Inc.',
    type: AvatarIconType.WORKSPACE_ICON,
    radius: 'sm',
    variant: 'filled',
  },
};

export const Uploading: Story = {
  args: { isLoading: true },
};
