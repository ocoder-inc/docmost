import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppHeader } from '@source/apps/client/src/components/layouts/global/app-header';

const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
} satisfies Meta<typeof AppHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
