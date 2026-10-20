import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatLayout from '@source/apps/client/src/ee/ai-chat/components/ai-chat-layout';
import { withRoutePattern } from '../fixtures/decorators';
import { sampleChats } from '../fixtures/data';

// The body of the AI chat page, which fills the app shell's main area.
const meta = {
  title: 'Components/AiChatLayout',
  component: AiChatLayout,
  decorators: [withRoutePattern('/ai/chat/:chatId')],
  parameters: { route: `/ai/chat/${sampleChats[0].id}` },
} satisfies Meta<typeof AiChatLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

// An existing conversation.
export const Default: Story = {};
