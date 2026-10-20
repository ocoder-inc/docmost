import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatInput from '@source/apps/client/src/ee/ai-chat/components/chat-input';

const meta = {
  title: 'Components/ChatInput',
  component: ChatInput,
} satisfies Meta<typeof ChatInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
