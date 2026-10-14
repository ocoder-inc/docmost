import type { Meta, StoryObj } from '@storybook/react-vite';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
  args: { onUpload: async () => {}, onRemove: async () => {} },
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallbackName: 'Acme Corp',
    type: AvatarIconType.WORKSPACE_ICON,
    size: '60px',
    radius: 'sm',
    variant: 'filled',
  },
};

export const UserAvatar: Story = {
  args: {
    fallbackName: 'Jane Cooper',
    type: AvatarIconType.AVATAR,
    size: '60px',
    radius: 'xl',
  },
};

export const Loading: Story = {
  args: {
    fallbackName: 'Engineering',
    type: AvatarIconType.SPACE_ICON,
    size: '60px',
    radius: 'sm',
    variant: 'filled',
    isLoading: true,
  },
};
