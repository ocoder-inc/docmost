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

// The app renders an icon button from its render prop, as the API key created modal does.
export const Default: Story = {
  args: {
    value: 'dm_live_8f2c1a9e4b7d4c0f9a3e2b1c5d6e7f80',
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
