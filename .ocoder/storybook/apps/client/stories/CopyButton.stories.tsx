import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

import { CopyButton } from '@source/apps/client/src/components/common/copy-button';

const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// A render-prop wrapper: the app renders an icon button that copies a share link, as here.
export const Default: Story = {
  args: {
    value: 'https://acme.docmost.com/share/x7k2pq/p/deployment-runbook-Xk3PqR8sTv',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Tooltip label={copied ? 'Copied' : 'Copy link'} withArrow position="right">
        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy} aria-label="Copy link">
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
        </ActionIcon>
      </Tooltip>
    ),
  },
};
