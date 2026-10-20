import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolGroup from '@source/apps/client/src/ee/ai-chat/components/chat-tool-group';
import { toolCalls } from '../fixtures/data';

const meta = {
  title: 'Components/ChatToolGroup',
  component: ChatToolGroup,
  args: { toolCalls },
} satisfies Meta<typeof ChatToolGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Collapsed to "Steps 2" after the answer is done. */
export const Default: Story = {};

/** While the assistant is still running a tool. */
export const Running: Story = {
  args: { toolCalls: [toolCalls[0], { ...toolCalls[1], result: undefined }], isStreaming: true },
};
