import type { Meta, StoryObj } from '@storybook/react-vite';

import AiSettings from '@source/apps/client/src/ee/ai/pages/ai-settings';

// The /settings/ai page, in the settings column (900px at most).
const meta = {
  title: 'Components/AiSettings',
  component: AiSettings,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { route: '/settings/ai' },
} satisfies Meta<typeof AiSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The MCP tab, at /settings/ai/mcp. */
export const Mcp: Story = {
  parameters: { route: '/settings/ai/mcp' },
};
