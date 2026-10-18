import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatEmptyState from '@source/apps/client/src/ee/ai-chat/components/chat-empty-state';
import { sampleCurrentUser, sampleWorkspace, withApp } from '../fixtures/story-kit';
import { withBox } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/ChatEmptyState',
  component: ChatEmptyState,
  // Fills the AI chat page's main column, which is at most 900px wide.
  decorators: [withBox({ maxWidth: 900, margin: '0 auto', height: 640, display: 'flex', flexDirection: 'column' })],
  args: { isStreaming: false, onSend: () => {}, onStop: () => {} },
} satisfies Meta<typeof ChatEmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

// The /ai page before the first message: greeting, input and four suggestions.
export const Default: Story = {
  decorators: [withApp()],
};

// With AI Chat in read-only mode the "create" and "update" suggestions are hidden.
export const ReadOnly: Story = {
  decorators: [
    withApp({
      currentUser: {
        ...sampleCurrentUser,
        workspace: {
          ...sampleWorkspace,
          settings: { ai: { ...sampleWorkspace.settings?.ai, chatReadOnly: true } },
        } as never,
      },
    }),
  ],
};
