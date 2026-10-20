import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import ChatToolGroup from '@source/apps/client/src/ee/ai-chat/components/chat-tool-group';
import { inBox } from '../fixtures/decorators';
import { aiChatMessages } from '../fixtures/data';

const toolCalls = aiChatMessages[1].toolCalls ?? [];

const meta = {
  title: 'Components/ChatToolGroup',
  component: ChatToolGroup,
  // Above an assistant answer in the AI chat page's 900px column.
  decorators: [inBox({ maxWidth: 860 })],
} satisfies Meta<typeof ChatToolGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

// The steps the assistant took, collapsed.
export const Default: Story = {
  args: { toolCalls },
};

export const Expanded: Story = {
  args: { toolCalls },
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: /Steps/ }));
  },
};

// While a tool runs, its label shows with a spinner.
export const Running: Story = {
  args: {
    toolCalls: [toolCalls[0], { id: 'call_2', name: 'get_page', args: { pageId: 'Xk3PqR8sTv' } }],
    isStreaming: true,
  },
};
