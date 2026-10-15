import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

import { CopyButton } from '@source/apps/client/src/components/common/copy-button';

const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// As in the MFA backup codes modal: a render-prop child that shows the copied state.
export const Default: Story = {
  args: {
    value: 'a1b2-c3d4\ne5f6-g7h8\ni9j0-k1l2',
    children: ({ copied, copy }) => (
      <Button
        size="xs"
        variant="subtle"
        onClick={copy}
        leftSection={copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
      >
        {copied ? 'Copied' : 'Copy codes'}
      </Button>
    ),
  },
};
