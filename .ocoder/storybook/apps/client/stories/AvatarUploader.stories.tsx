import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';

const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: AvatarIconType.AVATAR,
    fallbackName: 'Jane Cooper',
    size: 'lg',
    onUpload: async () => {},
    onRemove: async () => {},
  },
};
