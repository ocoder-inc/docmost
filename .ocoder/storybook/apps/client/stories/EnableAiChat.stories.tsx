import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableAiChat from '@source/apps/client/src/ee/ai-chat/components/enable-ai-chat';
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
  title: 'Components/EnableAiChat',
  component: EnableAiChat,
  // A row in the Settings > AI page, whose content column is 900px wide.
  decorators: [withBox({ maxWidth: 868, padding: 16 })],
} satisfies Meta<typeof EnableAiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > AI: the AI Chat toggle, switched on for the workspace.
export const Default: Story = {
  decorators: [withApp({ currentUser: workspaceWithAi({ chat: true }) })],
};

// AI Chat switched off.
export const Off: Story = {
  decorators: [withApp({ currentUser: workspaceWithAi({ chat: false }) })],
};

// A licence without AI: the toggle is disabled.
export const NoAccess: Story = {
  decorators: [
    withApp({
      currentUser: workspaceWithAi({ chat: false }),
      entitlements: { ...allEntitlements, features: allEntitlements.features.filter((f) => f !== 'ai') },
    }),
  ],
};
