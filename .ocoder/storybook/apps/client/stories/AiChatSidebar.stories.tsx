import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebar from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar';
import { withApi, withRoutePath } from '../.storybook/providers';
import { chats, paginated } from '../fixtures/data';

// The app shell's navbar on /ai routes: 300px wide, the height of the page below the header.
const meta = {
  title: 'Components/AiChatSidebar',
  component: AiChatSidebar,
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 700, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
    withRoutePath('/ai/chat/:chatId'),
  ],
  parameters: { route: `/ai/chat/${chats[0].id}` },
} satisfies Meta<typeof AiChatSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoConversations: Story = {
  decorators: [withApi({ '/ai/chats': () => paginated([]) })],
};
