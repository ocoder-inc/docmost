import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebarItem from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar-item';

const meta = {
  title: 'Components/AiChatSidebarItem',
  component: AiChatSidebarItem,
} satisfies Meta<typeof AiChatSidebarItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
