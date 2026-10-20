import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebar from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar';
import { atRoutePattern, shellBackground, withApi } from '../fixtures/decorators';
import { aiChats, paginate } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatSidebar',
  component: AiChatSidebar,
  // The app shell's navbar on /ai pages: 300px wide, below the 45px header.
  decorators: [
    atRoutePattern('/ai/chat/:chatId'),
    (Story) => (
      <div style={{ width: 300, height: 755, display: 'flex', flexDirection: 'column', background: shellBackground }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen', route: `/ai/chat/${aiChats[0].id}` },
} satisfies Meta<typeof AiChatSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

// The user's chats, grouped by age, with the open one highlighted.
export const Default: Story = {};

export const NoChats: Story = {
  decorators: [withApi({ '/ai/chats': paginate([]) })],
};
