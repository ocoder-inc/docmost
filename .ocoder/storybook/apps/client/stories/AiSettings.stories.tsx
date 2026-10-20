import type { Meta, StoryObj } from '@storybook/react-vite';

import AiSettings from '@source/apps/client/src/ee/ai/pages/ai-settings';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/AiSettings',
  component: AiSettings,
  // The settings page at /settings/ai, in the settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
  parameters: { route: '/settings/ai' },
} satisfies Meta<typeof AiSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const McpTab: Story = {
  parameters: { route: '/settings/ai/mcp' },
};
