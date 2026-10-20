import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessageList from '@source/apps/client/src/ee/ai-chat/components/chat-message-list';
import { sampleChatMessages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatMessageList',
  component: ChatMessageList,
  // The scrolling transcript above the input on the AI chat page.
  decorators: [(Story) => <div style={{ height: 560, display: 'flex', flexDirection: 'column' }}><Story /></div>],
  args: { isStreaming: false, streamingContent: '', streamingToolCalls: [] },
} satisfies Meta<typeof ChatMessageList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { messages: sampleChatMessages },
};

export const Streaming: Story = {
  args: {
    messages: [sampleChatMessages[0]],
    isStreaming: true,
    streamingContent: 'Here is a summary of the **Deployment runbook**:',
  },
};
