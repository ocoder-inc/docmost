import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMoodSmile } from '@tabler/icons-react';
import { fn } from 'storybook/test';

import EmojiPicker from '@source/apps/client/src/components/ui/emoji-picker';

const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  args: { onEmojiSelect: fn(), removeEmojiAction: fn(), readOnly: false },
} satisfies Meta<typeof EmojiPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

// A page or template without an icon yet: the smiley button next to the title.
export const Default: Story = {
  args: { icon: <IconMoodSmile size={20} stroke={1.5} /> },
};

export const WithIcon: Story = {
  args: {
    icon: <span style={{ fontSize: '2rem', lineHeight: 1 }}>🚀</span>,
    actionIconProps: { size: '3rem', variant: 'transparent' },
  },
};
