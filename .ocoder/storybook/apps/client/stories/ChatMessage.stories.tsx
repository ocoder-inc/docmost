import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessage from '@source/apps/client/src/ee/ai-chat/components/chat-message';
import {
  assistantMessage,
  streamingToolCalls,
  userMessage,
  userMessageWithAttachments,
} from '../fixtures/aichat2-messages';

const meta = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  // Messages sit in the AI chat transcript (the 350px aside panel, with its padding).
  decorators: [
    (Story) => (
      <div style={{ width: 350, padding: '16px 20px', boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

// An assistant reply in the chat transcript: tool steps, markdown with page links, copy button.
export const Default: Story = {
  args: { message: assistantMessage },
};

// The user's own message, right-aligned in a bubble.
export const User: Story = {
  args: { message: userMessage },
};

// A user message with attached files (the referenced-pages block is hidden).
export const UserWithAttachments: Story = {
  args: { message: userMessageWithAttachments },
};

// The assistant reply while it streams: a running tool call and partial text.
export const Streaming: Story = {
  args: {
    message: { ...assistantMessage, id: 'streaming', content: null, toolCalls: null },
    isStreaming: true,
    streamingContent: 'The rotation changes every **Monday** at',
    streamingToolCalls,
  },
};
