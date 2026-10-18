import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolResult from '@source/apps/client/src/ee/ai-chat/components/chat-tool-result';

const meta = {
  title: 'Components/ChatToolResult',
  component: ChatToolResult,
} satisfies Meta<typeof ChatToolResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
