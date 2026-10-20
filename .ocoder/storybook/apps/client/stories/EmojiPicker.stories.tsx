import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { IconMoodSmile } from '@tabler/icons-react';

import EmojiPicker from '@source/apps/client/src/components/ui/emoji-picker';

// The emoji button of a callout or a page in the sidebar tree; click it to open the picker.
const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  args: {
    onEmojiSelect: fn(),
    removeEmojiAction: fn(),
    readOnly: false,
    icon: <IconMoodSmile size={18} />,
    actionIconProps: { size: 'lg', variant: 'subtle', c: 'gray' },
  },
} satisfies Meta<typeof EmojiPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** A page that already has an emoji. */
export const WithEmoji: Story = {
  args: { icon: <span style={{ fontSize: 18 }}>📐</span> },
};
