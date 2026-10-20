import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolResult from '@source/apps/client/src/ee/ai-chat/components/chat-tool-result';
import { sampleChatMessages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatToolResult',
  component: ChatToolResult,
  // A step inside an assistant message, in the chat column.
  decorators: [(Story) => <div style={{ maxWidth: 720 }}><Story /></div>],
} satisfies Meta<typeof ChatToolResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { toolCall: sampleChatMessages[1].toolCalls![0] },
};

export const Expanded: Story = {
  args: { toolCall: sampleChatMessages[1].toolCalls![0] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Searched pages'));
  },
};
