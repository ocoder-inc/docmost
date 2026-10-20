import type { Meta, StoryObj } from '@storybook/react-vite';

import Aside from '@source/apps/client/src/components/layouts/global/aside';

const meta = {
  title: 'Components/Aside',
  component: Aside,
} satisfies Meta<typeof Aside>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
