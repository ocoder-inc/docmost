import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessageList from '@source/apps/client/src/ee/ai-chat/components/chat-message-list';
import { inBox } from '../fixtures/decorators';
import { aiChatMessages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatMessageList',
  component: ChatMessageList,
  // The AI chat page's 900px column, above the input.
  decorators: [inBox({ maxWidth: 900, height: 600, display: 'flex', flexDirection: 'column' })],
  args: { isStreaming: false, streamingContent: '', streamingToolCalls: [] },
} satisfies Meta<typeof ChatMessageList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { messages: aiChatMessages },
};

// A question just sent, the answer still being written.
export const Streaming: Story = {
  args: {
    messages: aiChatMessages.slice(0, 1),
    isStreaming: true,
    streamingContent: '',
    streamingToolCalls: [{ id: 'call_1', name: 'search_pages', args: { query: 'deployment runbook' } }],
  },
};
