import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatLayout from '@source/apps/client/src/ee/ai-chat/components/ai-chat-layout';
import { withApp } from '../fixtures/story-kit';
import { activeChat, activeChatInfo } from '../fixtures/aichat1-chats';
import { withRoutePath } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/AiChatLayout',
  component: AiChatLayout,
} satisfies Meta<typeof AiChatLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

// The body of the AI chat page at /ai/chat/:chatId: the conversation and the input below it.
// It takes the page's main area (max 900px wide, full height).
export const Default: Story = {
  parameters: { route: `/ai/chat/${activeChat.id}` },
  decorators: [
    withRoutePath('/ai/chat/:chatId'),
    withApp({ queries: [[['ai-chat', activeChat.id], activeChatInfo]] }),
  ],
};

// At /ai with no chat yet: the empty state with suggestions.
export const NewChat: Story = {
  parameters: { route: '/ai' },
  decorators: [withRoutePath('/ai'), withApp()],
};
