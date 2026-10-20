import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { IconMoodSmile } from '@tabler/icons-react';

import EmojiPicker from '@source/apps/client/src/components/ui/emoji-picker';

const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  args: { onEmojiSelect: fn(), removeEmojiAction: fn(), readOnly: false },
} satisfies Meta<typeof EmojiPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

// The callout menu's icon button, before an icon is chosen.
export const Default: Story = {
  args: {
    icon: <IconMoodSmile size={18} />,
    actionIconProps: { size: 'lg', variant: 'subtle' },
  },
};

// A page in the sidebar tree with its emoji set.
export const WithEmoji: Story = {
  args: {
    icon: '🚀',
    actionIconProps: { size: 'sm', variant: 'subtle', c: 'gray' },
  },
};
