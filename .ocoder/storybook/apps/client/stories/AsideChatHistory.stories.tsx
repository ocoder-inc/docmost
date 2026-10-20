import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AsideChatHistory from '@source/apps/client/src/ee/ai-chat/components/aside-chat-history';
import { inBox, withApi } from '../fixtures/decorators';
import { aiChats, paginate } from '../fixtures/data';

const meta = {
  title: 'Components/AsideChatHistory',
  component: AsideChatHistory,
  // The 280px popover under the page chat panel's title.
  decorators: [inBox({ width: 280 })],
  args: { onSelect: fn() },
} satisfies Meta<typeof AsideChatHistory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { activeChatId: aiChats[0].id },
};

export const NoHistory: Story = {
  args: { activeChatId: undefined },
  decorators: [withApi({ '/ai/chats': paginate([]) })],
};
