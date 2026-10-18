import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '@mantine/core';

import McpSettings from '@source/apps/client/src/ee/ai/components/mcp-settings';
import { withApp } from '../fixtures/story-kit';
import { mcpEnabledUser } from '../fixtures/apikeys-data';

const meta = {
  title: 'Components/McpSettings',
  component: McpSettings,
  // Settings pages sit in the app shell's 900px content column.
  decorators: [
    (Story) => (
      <Container size={900} pt="md">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof McpSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

// The MCP tab of Settings > AI, with the MCP server enabled: server URL, OAuth enforcement, tools.
export const Default: Story = {
  decorators: [withApp({ currentUser: mcpEnabledUser })],
};

// The MCP tab before an admin switches the server on.
export const Disabled: Story = {
  decorators: [withApp()],
};

// Without an enterprise licence: an upgrade notice and a disabled switch.
export const Unlicensed: Story = {
  decorators: [withApp({ entitlements: { cloud: false, tier: 'free', features: [] } })],
};
