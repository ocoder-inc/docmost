import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChat from '@source/apps/client/src/ee/ai-chat/pages/ai-chat';
import { withApp } from '../fixtures/story-kit';
import { activeChat, activeChatInfo, aiChatsPages } from '../fixtures/aichat1-chats';
import { withRoutePath } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/AiChat',
  component: AiChat,
} satisfies Meta<typeof AiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

// The full-page AI chat at /ai/chat/:chatId, showing an earlier conversation loaded from the server.
// A page: it fills the main area of the app shell.
export const Default: Story = {
  parameters: { route: `/ai/chat/${activeChat.id}`, layout: 'fullscreen' },
  decorators: [
    withRoutePath('/ai/chat/:chatId'),
    withApp({ queries: [[['ai-chat', activeChat.id], activeChatInfo], [['ai-chats'], aiChatsPages()]] }),
  ],
};

// /ai: a new chat, before the first message is sent.
export const NewChat: Story = {
  parameters: { route: '/ai', layout: 'fullscreen' },
  decorators: [withRoutePath('/ai'), withApp()],
};
