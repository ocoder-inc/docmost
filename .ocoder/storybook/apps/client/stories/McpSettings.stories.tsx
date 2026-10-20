import type { Meta, StoryObj } from '@storybook/react-vite';

import McpSettings from '@source/apps/client/src/ee/ai/components/mcp-settings';

const meta = {
  title: 'Components/McpSettings',
  component: McpSettings,
} satisfies Meta<typeof McpSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
