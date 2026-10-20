import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatWorkspaceKnowledgeOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-workspace-knowledge-only';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { withAtoms } from '../.storybook/providers';
import { freeEntitlements } from '../fixtures/data';

// A row of the AI settings page, which sits in the settings column (900px at most).
const meta = {
  title: 'Components/AiChatWorkspaceKnowledgeOnly',
  component: AiChatWorkspaceKnowledgeOnly,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AiChatWorkspaceKnowledgeOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

/** On a plan that includes it, so the switch can be used. */
export const Default: Story = {};

/** On the free plan: the switch is disabled behind the upgrade label. */
export const UpgradeRequired: Story = {
  decorators: [withAtoms([[entitlementAtom, freeEntitlements]])],
};
