import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

// The copy icon beside a value, such as a new API key's token.
const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
  args: { text: 'dm_live_8f3K2pQ9xV7mT4bN6cR1sW5yZ0aE3hJ2' },
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'Copy assistant response' },
};
