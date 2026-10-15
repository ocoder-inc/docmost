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
