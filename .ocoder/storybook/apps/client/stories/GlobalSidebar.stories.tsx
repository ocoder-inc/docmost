import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalSidebar from '@source/apps/client/src/components/layouts/global/global-sidebar';

const meta = {
  title: 'Components/GlobalSidebar',
  component: GlobalSidebar,
} satisfies Meta<typeof GlobalSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
