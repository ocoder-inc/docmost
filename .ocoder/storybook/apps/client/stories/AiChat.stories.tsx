import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChat from '@source/apps/client/src/ee/ai-chat/pages/ai-chat';
import { atRoutePattern, inBox } from '../fixtures/decorators';
import { aiChats } from '../fixtures/data';

const meta = {
  title: 'Components/AiChat',
  component: AiChat,
  // The page at /ai and /ai/chat/:chatId, inside the app shell's main area.
  // The app shell's main area beside the 300px chat sidebar, below the 45px header.
  decorators: [inBox({ width: 980, height: 755, display: 'flex' })],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

// A new chat at /ai: the welcome screen and suggestions.
export const Default: Story = {
  decorators: [atRoutePattern('/ai')],
  parameters: { route: '/ai' },
};

// An earlier conversation, loaded from its URL.
export const Conversation: Story = {
  decorators: [atRoutePattern('/ai/chat/:chatId')],
  parameters: { route: `/ai/chat/${aiChats[0].id}` },
};
