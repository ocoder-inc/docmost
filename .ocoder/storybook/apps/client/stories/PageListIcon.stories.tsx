import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageListIcon } from '@source/apps/client/src/components/common/page-list-icon';

const meta = {
  title: 'Components/PageListIcon',
  component: PageListIcon,
} satisfies Meta<typeof PageListIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Emoji: Story = {
  args: { icon: '🚀' },
};

export const Base: Story = {
  args: { isBase: true },
};
