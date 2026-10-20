import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

import { CopyButton } from '@source/apps/client/src/components/common/copy-button';

// A render-prop wrapper: the app passes a function that draws the button, like the MCP settings do.
const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
  args: {
    value: 'https://docs.acme.com/mcp',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy} aria-label="Copy">
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
        </ActionIcon>
      </Tooltip>
    ),
  },
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
