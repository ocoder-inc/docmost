import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatLayout from '@source/apps/client/src/ee/ai-chat/components/ai-chat-layout';
import { withRoutePath } from '../.storybook/providers';
import { chats } from '../fixtures/data';

// Rendered by the /ai page inside its full-height layout.
const meta = {
  title: 'Components/AiChatLayout',
  component: AiChatLayout,
  decorators: [
    // The app shell's main area beside the 300px AI chat sidebar, below the 45px header.
    (Story) => (
      <div style={{ width: 948, height: 723, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AiChatLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withRoutePath('/ai/chat/:chatId')],
  parameters: { route: `/ai/chat/${chats[0].id}` },
};

export const Empty: Story = {
  decorators: [withRoutePath('/ai')],
  parameters: { route: '/ai' },
};
