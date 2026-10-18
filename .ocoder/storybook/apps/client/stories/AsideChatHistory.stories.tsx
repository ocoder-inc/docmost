import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatHistory from '@source/apps/client/src/ee/ai-chat/components/aside-chat-history';
import { withApp } from '../fixtures/story-kit';
import { aiChats, aiChatsPages } from '../fixtures/aichat1-chats';
import { withBox } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/AsideChatHistory',
  component: AsideChatHistory,
  // Shown in the 280px popover under the aside chat panel's title.
  decorators: [withBox({ width: 280, padding: 12 })],
  args: { onSelect: () => {} },
} satisfies Meta<typeof AsideChatHistory>;
export default meta;
type Story = StoryObj<typeof meta>;

// The chat history popover in a page's AI chat aside, with the current chat highlighted.
export const Default: Story = {
  args: { activeChatId: aiChats[0].id },
  decorators: [withApp({ queries: [[['ai-chats'], aiChatsPages()]] })],
};

// No chats yet.
export const Empty: Story = {
  args: { activeChatId: undefined },
  decorators: [withApp({ queries: [[['ai-chats'], aiChatsPages([])]] })],
};
