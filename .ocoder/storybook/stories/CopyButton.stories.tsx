import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

import { CopyButton } from '@source/apps/client/src/components/common/copy-button';

const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'https://docs.example.com/share/k3j9x2/p/onboarding-guide',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Button color={copied ? 'teal' : undefined} onClick={copy}>
        {copied ? 'Copied link' : 'Copy link'}
      </Button>
    ),
  },
};
