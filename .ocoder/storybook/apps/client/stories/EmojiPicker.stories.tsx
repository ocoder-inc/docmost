import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconFileDescription } from '@tabler/icons-react';
import { userEvent, within } from 'storybook/test';

import EmojiPicker from '@source/apps/client/src/components/ui/emoji-picker';

const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  // The page tree row's icon slot.
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmojiPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

// The icon button in front of a page in the sidebar's page tree: a page without an emoji.
export const Default: Story = {
  args: {
    icon: <IconFileDescription size="18" />,
    readOnly: false,
    onEmojiSelect: () => {},
    removeEmojiAction: () => {},
    actionIconProps: { size: '20px', variant: 'subtle', c: 'gray' },
  },
};

// The same button clicked: the emoji picker opens below it, with its "Remove" button.
export const Open: Story = {
  args: {
    icon: '🚀',
    readOnly: false,
    onEmojiSelect: () => {},
    removeEmojiAction: () => {},
    actionIconProps: { size: '20px', variant: 'subtle', c: 'gray' },
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Pick emoji' }));
  },
};
