import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessage from '@source/apps/client/src/ee/ai-chat/components/chat-message';

const meta = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
} satisfies Meta<typeof ChatMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
