import type { Meta, StoryObj } from '@storybook/react-vite';

import AppVersion from '@source/apps/client/src/components/settings/app-version';

const meta = {
  title: 'Components/AppVersion',
  component: AppVersion,
} satisfies Meta<typeof AppVersion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
