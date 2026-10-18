import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatReadOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-read-only';
import { allEntitlements, sampleCurrentUser, sampleWorkspace, withApp } from '../fixtures/story-kit';
import { withBox } from '../fixtures/aichat1-route';

/** The signed-in user's workspace with these AI settings. */
function workspaceWithAi(ai: Record<string, unknown>) {
  return {
    ...sampleCurrentUser,
    workspace: { ...sampleWorkspace, settings: { ai: { ...sampleWorkspace.settings?.ai, ...ai } } } as never,
  };
}

const meta = {
  title: 'Components/AiChatReadOnly',
  component: AiChatReadOnly,
  // A row in the Settings > AI page, whose content column is 900px wide.
  decorators: [withBox({ maxWidth: 868, padding: 16 })],
} satisfies Meta<typeof AiChatReadOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > AI, under AI Chat: read-only mode, switched on.
export const Default: Story = {
  decorators: [withApp({ currentUser: workspaceWithAi({ chat: true, chatReadOnly: true }) })],
};

// Read-only mode off.
export const Off: Story = {
  decorators: [withApp({ currentUser: workspaceWithAi({ chat: true, chatReadOnly: false }) })],
};

// A licence without AI controls: an Enterprise badge and a disabled toggle.
export const NoAccess: Story = {
  decorators: [
    withApp({
      currentUser: workspaceWithAi({ chat: true }),
      entitlements: { ...allEntitlements, features: allEntitlements.features.filter((f) => f !== 'ai:controls') },
    }),
  ],
};
