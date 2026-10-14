import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: 'https://docs.acme.com/share/x7k2p9/p/onboarding-guide-a1b2c3' },
};

export const WithLabel: Story = {
  args: { text: 'https://docs.acme.com/mcp', label: 'Copy MCP server URL', size: 'lg' },
};
