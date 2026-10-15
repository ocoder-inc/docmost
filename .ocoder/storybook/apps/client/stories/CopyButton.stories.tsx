import type { Meta, StoryObj } from '@storybook/react-vite';

import { CopyButton } from '@source/apps/client/src/components/common/copy-button';

const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'https://example.com/shared-page',
    children: ({ copied, copy }) => <button onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button>,
  },
};
