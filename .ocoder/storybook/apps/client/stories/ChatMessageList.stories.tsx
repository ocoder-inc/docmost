import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatMessageList from '@source/apps/client/src/ee/ai-chat/components/chat-message-list';

const meta = {
  title: 'Components/ChatMessageList',
  component: ChatMessageList,
} satisfies Meta<typeof ChatMessageList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
