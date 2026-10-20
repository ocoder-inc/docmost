import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessage from '@source/apps/client/src/ee/ai-chat/components/chat-message';
import { chatMessages, toolCalls } from '../fixtures/data';

const meta = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 760 }}>
        <Story />
      </div>
    ),
  ],
  args: { message: chatMessages[1] },
} satisfies Meta<typeof ChatMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

/** An assistant answer: the steps it took, the markdown reply and a copy button. */
export const Default: Story = {};

export const UserMessage: Story = {
  args: { message: chatMessages[0] },
};

/** The assistant while it is still answering. */
export const Streaming: Story = {
  args: {
    message: { ...chatMessages[1], id: 'streaming', content: null, toolCalls: null },
    isStreaming: true,
    streamingContent: 'Here is a summary of the **Q4 roadmap**:\n\n- **Search**: ship semantic search',
    streamingToolCalls: toolCalls,
  },
};
