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

// As the MFA setup modal uses it: an icon button that copies the manual setup key.
export const Default: Story = {
  args: {
    value: 'JBSWY3DPEHPK3PXP',
    children: ({ copied, copy }) => (
      <Tooltip label={copied ? 'Copied' : 'Copy'}>
        <ActionIcon color={copied ? 'green' : 'gray'} onClick={copy} aria-label={copied ? 'Copied' : 'Copy'}>
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
        </ActionIcon>
      </Tooltip>
    ),
  },
};
