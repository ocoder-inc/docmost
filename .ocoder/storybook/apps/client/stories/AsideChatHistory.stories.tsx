import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AsideChatHistory from '@source/apps/client/src/ee/ai-chat/components/aside-chat-history';
import { withApi } from '../fixtures/decorators';
import { sampleChats, paginated } from '../fixtures/data';

const meta = {
  title: 'Components/AsideChatHistory',
  component: AsideChatHistory,
  // The content of the 280px history popover in the page's AI chat panel.
  decorators: [(Story) => <div style={{ width: 256 }}><Story /></div>],
  args: { onSelect: fn() },
} satisfies Meta<typeof AsideChatHistory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { activeChatId: sampleChats[0].id },
};

export const Empty: Story = {
  args: { activeChatId: undefined },
  decorators: [withApi({ '/ai/chats': paginated([]) })],
};
