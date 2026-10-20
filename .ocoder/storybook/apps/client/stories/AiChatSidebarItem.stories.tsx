import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AiChatSidebarItem from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar-item';
import { chats } from '../fixtures/data';

// One row of the 300px AI chat sidebar.
const meta = {
  title: 'Components/AiChatSidebarItem',
  component: AiChatSidebarItem,
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
  args: { chat: chats[0], isActive: false, onDelete: fn(), onRename: fn() },
} satisfies Meta<typeof AiChatSidebarItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: { isActive: true },
};

export const Untitled: Story = {
  args: { chat: chats[3] },
};
