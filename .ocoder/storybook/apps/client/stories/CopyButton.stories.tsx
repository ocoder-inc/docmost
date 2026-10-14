import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

import { CopyButton } from '@source/apps/client/src/components/common/copy-button';

const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'https://docs.acme.com/share/x7k2p9/p/onboarding-guide-a1b2c3',
    children: ({ copied, copy }) => (
      <Button color={copied ? 'teal' : 'blue'} onClick={copy} leftSection={copied ? <IconCheck size={16} /> : <IconCopy size={16} />}>
        {copied ? 'Copied link' : 'Copy link'}
      </Button>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    value: 'dm_live_4f9a2c7e81b3d6',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy} aria-label={copied ? 'Copied' : 'Copy'}>
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
        </ActionIcon>
      </Tooltip>
    ),
  },
};
