import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// As next to a share link in the share modal.
export const Default: Story = {
  args: { text: 'https://docs.example.com/share/k3j9x2/p/getting-started-a1B2c3' },
};

// Under an AI chat answer, with its own accessible label so it is not confused with other copy buttons.
export const WithLabel: Story = {
  args: {
    text: 'To invite a teammate, open Settings > Members and click "Invite members".',
    label: 'Copy assistant response',
  },
};
