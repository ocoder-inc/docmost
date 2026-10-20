import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatReadOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-read-only';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { withAtoms } from '../.storybook/providers';
import { freeEntitlements } from '../fixtures/data';

// A row of the AI settings page, which sits in the settings column (900px at most).
const meta = {
  title: 'Components/AiChatReadOnly',
  component: AiChatReadOnly,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AiChatReadOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

/** On a plan that includes it, so the switch can be used. */
export const Default: Story = {};

/** On the free plan: the switch is disabled behind the upgrade label. */
export const UpgradeRequired: Story = {
  decorators: [withAtoms([[entitlementAtom, freeEntitlements]])],
};
