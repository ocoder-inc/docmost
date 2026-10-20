import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessage from '@source/apps/client/src/ee/ai-chat/components/chat-message';
import { sampleChatMessages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  // One turn of the conversation, in the chat page's 720px column.
  decorators: [(Story) => <div style={{ maxWidth: 720 }}><Story /></div>],
} satisfies Meta<typeof ChatMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

// The assistant's answer, with the tool steps it took and its markdown rendered.
export const Default: Story = {
  args: { message: sampleChatMessages[1] },
};

export const UserMessage: Story = {
  args: {
    message: {
      ...sampleChatMessages[0],
      metadata: { attachments: [{ id: 'att-1', fileName: 'release-checklist.pdf', fileExt: 'pdf' }] },
    },
  },
};

export const Streaming: Story = {
  args: {
    message: { ...sampleChatMessages[1], content: null, toolCalls: null },
    isStreaming: true,
    streamingContent: 'Here is a summary of the **Deployment runbook**:\n\n- Merge to `main`',
    streamingToolCalls: sampleChatMessages[1].toolCalls!,
  },
};
