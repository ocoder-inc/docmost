import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import ChatToolResult from '@source/apps/client/src/ee/ai-chat/components/chat-tool-result';
import { inBox } from '../fixtures/decorators';
import { aiChatMessages } from '../fixtures/data';

const toolCall = (aiChatMessages[1].toolCalls ?? [])[0];

const meta = {
  title: 'Components/ChatToolResult',
  component: ChatToolResult,
  // One step in an expanded tool group, in the AI chat page's 900px column.
  decorators: [inBox({ maxWidth: 860 })],
} satisfies Meta<typeof ChatToolResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { toolCall },
};

// Expanded to show the tool's arguments and result.
export const Expanded: Story = {
  args: { toolCall },
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByText('Searched pages'));
  },
};
