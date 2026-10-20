import type { Meta, StoryObj } from '@storybook/react-vite';

import Layout from '@source/apps/client/src/components/layouts/global/layout';

const meta = {
  title: 'Components/Layout',
  component: Layout,
} satisfies Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
