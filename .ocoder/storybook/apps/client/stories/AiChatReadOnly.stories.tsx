import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatReadOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-read-only';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { withAtoms } from '../fixtures/decorators';
import { sampleEntitlements } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatReadOnly',
  component: AiChatReadOnly,
  // A row of the AI settings page, inside its 900px settings container.
  decorators: [(Story) => <div style={{ maxWidth: 868 }}><Story /></div>],
} satisfies Meta<typeof AiChatReadOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// On a plan without the feature the switch is disabled and marked Enterprise.
export const WithoutAccess: Story = {
  decorators: [
    withAtoms([
      [entitlementAtom, { ...sampleEntitlements, tier: 'standard', features: sampleEntitlements.features.filter((f) => f !== 'ai:controls') }],
    ]),
  ],
};
