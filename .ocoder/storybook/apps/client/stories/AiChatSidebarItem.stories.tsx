import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AiChatSidebarItem from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar-item';
import { inBox } from '../fixtures/decorators';
import { aiChats } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatSidebarItem',
  component: AiChatSidebarItem,
  // One row of the 300px AI chat sidebar.
  decorators: [inBox({ width: 280 })],
  args: { onDelete: fn(), onRename: fn(), isActive: false },
} satisfies Meta<typeof AiChatSidebarItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { chat: aiChats[1] },
};

// The chat open in the page.
export const Active: Story = {
  args: { chat: aiChats[0], isActive: true },
};

// A chat the model has not titled yet.
export const Untitled: Story = {
  args: { chat: aiChats[3] },
};
