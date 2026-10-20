import type { Meta, StoryObj } from '@storybook/react-vite';

import AiSettings from '@source/apps/client/src/ee/ai/pages/ai-settings';

// The workspace's AI settings page, as the app shell's 900px settings container shows it.
const meta = {
  title: 'Components/AiSettings',
  component: AiSettings,
  decorators: [(Story) => <div style={{ maxWidth: 900, margin: '0 auto' }}><Story /></div>],
  parameters: { route: '/settings/ai' },
} satisfies Meta<typeof AiSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const McpTab: Story = {
  parameters: { route: '/settings/ai/mcp' },
};
