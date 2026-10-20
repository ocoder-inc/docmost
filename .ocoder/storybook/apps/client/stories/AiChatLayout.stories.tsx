import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatLayout from '@source/apps/client/src/ee/ai-chat/components/ai-chat-layout';
import { atRoutePattern, inBox } from '../fixtures/decorators';
import { aiChats } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatLayout',
  component: AiChatLayout,
  // The app shell's main area beside the 300px chat sidebar, below the 45px header.
  decorators: [inBox({ width: 980, height: 755, display: 'flex' })],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AiChatLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

// An earlier conversation, with its messages and the input below them.
export const Default: Story = {
  decorators: [atRoutePattern('/ai/chat/:chatId')],
  parameters: { route: `/ai/chat/${aiChats[0].id}` },
};

// A new chat: the welcome screen.
export const NewChat: Story = {
  decorators: [atRoutePattern('/ai')],
  parameters: { route: '/ai' },
};
