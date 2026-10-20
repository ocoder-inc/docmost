import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChat from '@source/apps/client/src/ee/ai-chat/pages/ai-chat';
import { withRoutePath } from '../.storybook/providers';
import { chats } from '../fixtures/data';

// The /ai page.
const meta = {
  title: 'Components/AiChat',
  component: AiChat,
  decorators: [
    // The app shell's main area beside the 300px AI chat sidebar, below the 45px header.
    (Story) => (
      <div style={{ width: 948, height: 723, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

/** An existing conversation, at /ai/chat/:chatId. */
export const Default: Story = {
  decorators: [withRoutePath('/ai/chat/:chatId')],
  parameters: { route: `/ai/chat/${chats[0].id}` },
};

/** A new chat at /ai: the welcome screen with suggestions. */
export const NewChat: Story = {
  decorators: [withRoutePath('/ai')],
  parameters: { route: '/ai' },
};
