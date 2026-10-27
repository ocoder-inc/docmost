import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconGroupCircle } from '@source/apps/client/src/components/icons/icon-people-circle';

const meta = {
  title: 'Components/IconGroupCircle',
  component: IconGroupCircle,
} satisfies Meta<typeof IconGroupCircle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
