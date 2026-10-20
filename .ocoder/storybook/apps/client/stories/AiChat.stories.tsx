import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChat from '@source/apps/client/src/ee/ai-chat/pages/ai-chat';
import { withRoutePattern } from '../fixtures/decorators';
import { sampleChats } from '../fixtures/data';

// The AI chat page, which fills the app shell's main area.
const meta = {
  title: 'Components/AiChat',
  component: AiChat,
  decorators: [withRoutePattern('/ai/chat?/:chatId?')],
  parameters: { route: '/ai' },
} satisfies Meta<typeof AiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

// A new chat at /ai.
export const Default: Story = {};

export const ExistingChat: Story = {
  parameters: { route: `/ai/chat/${sampleChats[0].id}` },
};
