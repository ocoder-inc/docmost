import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessageList from '@source/apps/client/src/ee/ai-chat/components/chat-message-list';
import { chatMessages, toolCalls } from '../fixtures/data';

// The transcript fills the space above the chat input on /ai.
const meta = {
  title: 'Components/ChatMessageList',
  component: ChatMessageList,
  decorators: [
    (Story) => (
      <div style={{ height: 600, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
  args: { messages: chatMessages, isStreaming: false, streamingContent: '', streamingToolCalls: [] },
} satisfies Meta<typeof ChatMessageList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Streaming: Story = {
  args: {
    messages: chatMessages.slice(0, 1),
    isStreaming: true,
    streamingContent: '',
    streamingToolCalls: [{ ...toolCalls[0], result: undefined }],
  },
};
