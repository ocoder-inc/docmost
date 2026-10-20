import type { Meta, StoryObj } from '@storybook/react-vite';

import TopMenu from '@source/apps/client/src/components/layouts/global/top-menu';

const meta = {
  title: 'Components/TopMenu',
  component: TopMenu,
} satisfies Meta<typeof TopMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
