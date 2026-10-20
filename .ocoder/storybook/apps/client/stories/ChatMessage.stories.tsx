import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessage from '@source/apps/client/src/ee/ai-chat/components/chat-message';
import { inBox } from '../fixtures/decorators';
import { aiChatMessages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  // The AI chat page's 900px column.
  decorators: [inBox({ maxWidth: 860 })],
} satisfies Meta<typeof ChatMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

// The assistant's answer: the tools it used, its markdown reply and a copy button.
export const Default: Story = {
  args: { message: aiChatMessages[1] },
};

export const UserMessage: Story = {
  args: {
    message: {
      ...aiChatMessages[0],
      metadata: { attachments: [{ id: 'att-1', fileName: 'incident-report.pdf', fileExt: 'pdf' }] },
    },
  },
};

// While the answer streams in, after the model searched the workspace.
export const Streaming: Story = {
  args: {
    message: { ...aiChatMessages[1], id: 'streaming', content: null, toolCalls: null },
    isStreaming: true,
    streamingContent: 'Deploys run from `main` through the CI pipeline',
    streamingToolCalls: [{ id: 'call_1', name: 'search_pages', args: { query: 'deployment' }, result: { count: 3 } }],
  },
};
