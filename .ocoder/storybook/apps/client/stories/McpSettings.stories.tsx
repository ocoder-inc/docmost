import type { Meta, StoryObj } from '@storybook/react-vite';

import McpSettings from '@source/apps/client/src/ee/ai/components/mcp-settings';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { inBox, withAtoms } from '../fixtures/decorators';
import { entitlements } from '../fixtures/data';

const meta = {
  title: 'Components/McpSettings',
  component: McpSettings,
  // The MCP tab of the AI settings page, in the settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof McpSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Without the MCP entitlement an upgrade notice shows and the switch is disabled.
export const NotEntitled: Story = {
  decorators: [withAtoms([[entitlementAtom, { ...entitlements, tier: 'standard', features: [] }]])],
};
