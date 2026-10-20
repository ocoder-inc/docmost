import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatHistory from '@source/apps/client/src/ee/ai-chat/components/aside-chat-history';

const meta = {
  title: 'Components/AsideChatHistory',
  component: AsideChatHistory,
} satisfies Meta<typeof AsideChatHistory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
