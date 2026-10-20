import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AsideChatHistory from '@source/apps/client/src/ee/ai-chat/components/aside-chat-history';
import { chats } from '../fixtures/data';

// The 280px popover under the title of the page's AI chat panel.
const meta = {
  title: 'Components/AsideChatHistory',
  component: AsideChatHistory,
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
  args: { activeChatId: chats[0].id, onSelect: fn() },
} satisfies Meta<typeof AsideChatHistory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
