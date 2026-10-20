import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableGenerativeAi from '@source/apps/client/src/ee/ai/components/enable-generative-ai';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { withAtoms } from '../fixtures/decorators';
import { sampleEntitlements } from '../fixtures/data';

const meta = {
  title: 'Components/EnableGenerativeAi',
  component: EnableGenerativeAi,
  // A row of the AI settings page, inside its 900px settings container.
  decorators: [(Story) => <div style={{ maxWidth: 868 }}><Story /></div>],
} satisfies Meta<typeof EnableGenerativeAi>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// On a plan without AI the switch is disabled.
export const WithoutAccess: Story = {
  decorators: [
    withAtoms([[entitlementAtom, { ...sampleEntitlements, tier: 'free', features: [] }]]),
  ],
};
