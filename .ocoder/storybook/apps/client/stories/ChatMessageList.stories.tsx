import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessageList from '@source/apps/client/src/ee/ai-chat/components/chat-message-list';
import { chatMessages, streamingToolCalls } from '../fixtures/aichat2-messages';

const meta = {
  title: 'Components/ChatMessageList',
  component: ChatMessageList,
  // The transcript fills the AI chat panel in the page aside (350px wide, full height).
  decorators: [
    (Story) => (
      <div style={{ width: 350, height: 640, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatMessageList>;
export default meta;
type Story = StoryObj<typeof meta>;

// The AI chat aside panel with a finished conversation.
export const Default: Story = {
  args: {
    messages: chatMessages,
    isStreaming: false,
    streamingContent: '',
    streamingToolCalls: [],
  },
};

// While the assistant is answering: a streaming reply with a tool call still running.
export const Streaming: Story = {
  args: {
    messages: chatMessages.slice(0, 1),
    isStreaming: true,
    streamingContent: '',
    streamingToolCalls,
  },
};
