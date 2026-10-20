import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebar from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar';

const meta = {
  title: 'Components/AiChatSidebar',
  component: AiChatSidebar,
} satisfies Meta<typeof AiChatSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
