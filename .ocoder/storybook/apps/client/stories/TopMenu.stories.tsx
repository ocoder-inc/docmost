import type { Meta, StoryObj } from '@storybook/react-vite';

import TopMenu from '@source/apps/client/src/components/layouts/global/top-menu';

const meta = {
  title: 'Components/TopMenu',
  component: TopMenu,
} satisfies Meta<typeof TopMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// The workspace menu at the right of the header, for the signed-in user.
export const Default: Story = {};
