import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '@mantine/core';

import AiSettings from '@source/apps/client/src/ee/ai/pages/ai-settings';
import { withApp } from '../fixtures/story-kit';
import { mcpEnabledUser } from '../fixtures/apikeys-data';

const meta = {
  title: 'Components/AiSettings',
  component: AiSettings,
  // Settings pages sit in the app shell's 900px content column.
  decorators: [
    (Story) => (
      <Container size={900} pt="md">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof AiSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > AI (/settings/ai), seen by the workspace owner: AI search, generative AI and chat toggles.
export const Default: Story = {
  parameters: { route: '/settings/ai' },
  decorators: [withApp()],
};

// Settings > AI > MCP (/settings/ai/mcp) with the MCP server enabled.
export const McpTab: Story = {
  parameters: { route: '/settings/ai/mcp' },
  decorators: [withApp({ currentUser: mcpEnabledUser })],
};
