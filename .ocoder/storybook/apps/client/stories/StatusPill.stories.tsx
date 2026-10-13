import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusPill } from '@source/apps/client/src/components/common/status-pill';

const meta = {
  title: 'Components/StatusPill',
  component: StatusPill,
} satisfies Meta<typeof StatusPill>;
export default meta;
type Story = StoryObj<typeof meta>;

// No label: the pill falls back to "Draft".
export const Default: Story = {};

export const Published: Story = {
  args: { label: 'Published' },
};
