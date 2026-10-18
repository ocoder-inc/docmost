import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatWorkspaceKnowledgeOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-workspace-knowledge-only';
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
  title: 'Components/AiChatWorkspaceKnowledgeOnly',
  component: AiChatWorkspaceKnowledgeOnly,
  // A row in the Settings > AI page, whose content column is 900px wide.
  decorators: [withBox({ maxWidth: 868, padding: 16 })],
} satisfies Meta<typeof AiChatWorkspaceKnowledgeOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > AI, under AI Chat: answer from workspace knowledge only, switched on.
export const Default: Story = {
  decorators: [withApp({ currentUser: workspaceWithAi({ chat: true, chatWorkspaceKnowledgeOnly: true }) })],
};

// Workspace knowledge only off.
export const Off: Story = {
  decorators: [withApp({ currentUser: workspaceWithAi({ chat: true, chatWorkspaceKnowledgeOnly: false }) })],
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
