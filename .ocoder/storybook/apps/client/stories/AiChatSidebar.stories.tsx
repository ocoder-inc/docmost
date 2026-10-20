import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatSidebar from '@source/apps/client/src/ee/ai-chat/components/ai-chat-sidebar';
import { withNavbar, withRoutePattern } from '../fixtures/decorators';
import { sampleChats } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatSidebar',
  component: AiChatSidebar,
  // The app shell's navbar on the AI chat pages.
  decorators: [withRoutePattern('/ai/chat/:chatId'), withNavbar],
  parameters: { route: `/ai/chat/${sampleChats[0].id}` },
} satisfies Meta<typeof AiChatSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
