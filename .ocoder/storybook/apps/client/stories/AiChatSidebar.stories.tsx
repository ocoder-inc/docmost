import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebar from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar';
import { withApp } from '../fixtures/story-kit';
import { activeChat, aiChatsPages } from '../fixtures/aichat1-chats';
import { withBox, withRoutePath } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/AiChatSidebar',
  component: AiChatSidebar,
  // The app shell's navbar on /ai routes is 300px wide and full height.
  decorators: [withBox({ width: 300, height: 640 })],
} satisfies Meta<typeof AiChatSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

// The navbar on /ai/chat/:chatId: past chats grouped by age, the open one highlighted.
export const Default: Story = {
  parameters: { route: `/ai/chat/${activeChat.id}` },
  decorators: [withRoutePath('/ai/chat/:chatId'), withApp({ queries: [[['ai-chats'], aiChatsPages()]] })],
};

// A user who has not chatted yet.
export const Empty: Story = {
  parameters: { route: '/ai' },
  decorators: [withRoutePath('/ai'), withApp({ queries: [[['ai-chats'], aiChatsPages([])]] })],
};
