import type { Meta, StoryObj } from '@storybook/react-vite';

import AvatarUploader from '@source/apps/client/src/components/common/avatar-uploader';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';

const meta = {
  title: 'Components/AvatarUploader',
  component: AvatarUploader,
} satisfies Meta<typeof AvatarUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallbackName: 'Alex Morgan',
    size: '60px',
    type: AvatarIconType.AVATAR,
    onUpload: async () => {},
    onRemove: async () => {},
  },
};
