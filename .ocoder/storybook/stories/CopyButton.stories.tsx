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

// The app passes a render function, as CopyTextButton does: an icon button that flips to a check once copied.
export const Default: Story = {
  args: {
    value: 'https://docs.example.com/share/k2x9p4/p/onboarding-guide',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Tooltip label={copied ? 'Copied' : 'Copy link'} withArrow position="right">
        <ActionIcon
          color={copied ? 'teal' : 'gray'}
          variant="subtle"
          onClick={copy}
          aria-label={copied ? 'Copied' : 'Copy link'}
        >
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
        </ActionIcon>
      </Tooltip>
    ),
  },
};
