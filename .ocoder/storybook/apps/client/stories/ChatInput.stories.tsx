import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatInput from '@source/apps/client/src/ee/ai-chat/components/chat-input';
import { withApp } from '../fixtures/story-kit';
import { activeChat, asidePage } from '../fixtures/aichat1-chats';
import { withBox } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/ChatInput',
  component: ChatInput,
  decorators: [withApp()],
  args: { isStreaming: false, onSend: () => {}, onStop: () => {} },
} satisfies Meta<typeof ChatInput>;
export default meta;
type Story = StoryObj<typeof meta>;

// The input under the conversation on /ai/chat/:chatId (page column, max 900px).
export const Default: Story = {
  args: { chatId: activeChat.id },
  decorators: [withBox({ maxWidth: 900, margin: '0 auto', padding: 16 })],
};

// While the assistant is answering: the send button becomes a stop button.
export const Streaming: Story = {
  args: { chatId: activeChat.id, isStreaming: true },
  decorators: [withBox({ maxWidth: 900, margin: '0 auto', padding: 16 })],
};

// In a page's AI chat aside: flat variant with the open page attached as context.
export const AsideWithContextPage: Story = {
  args: {
    variant: 'flat',
    autofocus: false,
    placeholder: 'Ask anything...',
    contextPages: [{ id: asidePage.id, title: asidePage.title, slugId: asidePage.slugId }],
    onRemoveContextPage: () => {},
  },
  decorators: [withBox({ width: 318, padding: 16 })],
};
