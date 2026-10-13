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
    value: 'https://acme.docmost.com/share/x7k2p9/p/q3-product-roadmap-a1b2c3d4e5',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
        {copied ? 'Copied link' : 'Copy link'}
      </Button>
    ),
  },
};
