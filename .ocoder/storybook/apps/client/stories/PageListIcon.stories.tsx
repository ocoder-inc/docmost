import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageListIcon } from '@source/apps/client/src/components/common/page-list-icon';

const meta = {
  title: 'Components/PageListIcon',
  component: PageListIcon,
} satisfies Meta<typeof PageListIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// A page without an emoji icon, as in the recent changes list.
export const Default: Story = {
  args: { icon: null, isBase: false },
};

export const Base: Story = {
  args: { icon: null, isBase: true },
};

export const Emoji: Story = {
  args: { icon: '📘', isBase: false },
};
