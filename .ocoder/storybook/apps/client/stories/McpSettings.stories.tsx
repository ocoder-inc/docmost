import type { Meta, StoryObj } from '@storybook/react-vite';

import McpSettings from '@source/apps/client/src/ee/ai/components/mcp-settings';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { withAtoms } from '../fixtures/decorators';
import { sampleEntitlements } from '../fixtures/data';

const meta = {
  title: 'Components/McpSettings',
  component: McpSettings,
  // The MCP tab of the AI settings page, in its 900px settings container.
  decorators: [(Story) => <div style={{ maxWidth: 868 }}><Story /></div>],
} satisfies Meta<typeof McpSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

// MCP is enabled for the workspace, so the server URL is shown.
export const Default: Story = {};

export const WithoutAccess: Story = {
  decorators: [
    withAtoms([
      [entitlementAtom, { ...sampleEntitlements, tier: 'business', features: sampleEntitlements.features.filter((f) => f !== 'mcp') }],
    ]),
  ],
};
