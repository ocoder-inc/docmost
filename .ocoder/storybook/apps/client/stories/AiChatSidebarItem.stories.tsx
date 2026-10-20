import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AiChatSidebarItem from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar-item';
import { sampleChats } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatSidebarItem',
  component: AiChatSidebarItem,
  // A chat in the 300px AI chat sidebar.
  decorators: [(Story) => <div style={{ width: 268 }}><Story /></div>],
  args: { onDelete: fn(), onRename: fn() },
} satisfies Meta<typeof AiChatSidebarItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { chat: sampleChats[1], isActive: false },
};

export const Active: Story = {
  args: { chat: sampleChats[0], isActive: true },
};
