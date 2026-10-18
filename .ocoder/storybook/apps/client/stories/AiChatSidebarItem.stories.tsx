import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebarItem from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar-item';
import { aiChats } from '../fixtures/aichat1-chats';
import { withBox } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/AiChatSidebarItem',
  component: AiChatSidebarItem,
  // A row in the 300px AI chat sidebar (inside its padding).
  decorators: [withBox({ width: 268 })],
  args: { onDelete: () => {}, onRename: () => {} },
} satisfies Meta<typeof AiChatSidebarItem>;
export default meta;
type Story = StoryObj<typeof meta>;

// A chat in the AI chat sidebar list, updated earlier today (shows the time).
export const Default: Story = {
  args: { chat: aiChats[1], isActive: false },
};

// The chat that is open at /ai/chat/:chatId.
export const Active: Story = {
  args: { chat: aiChats[0], isActive: true },
};

// A chat the AI has not titled yet, from earlier in the year.
export const Untitled: Story = {
  args: { chat: aiChats[4], isActive: false },
};
