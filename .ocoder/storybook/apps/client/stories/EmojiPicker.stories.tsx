import type { Meta, StoryObj } from '@storybook/react-vite';

import EmojiPicker from '@source/apps/client/src/components/ui/emoji-picker';

const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
} satisfies Meta<typeof EmojiPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
