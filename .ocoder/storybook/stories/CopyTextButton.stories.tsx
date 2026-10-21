import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { text: 'https://example.com/share/guide', label: 'Copy public link', size: 'md' } };
