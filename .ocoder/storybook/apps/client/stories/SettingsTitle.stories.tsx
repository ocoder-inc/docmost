import type { Meta, StoryObj } from '@storybook/react-vite';

import SettingsTitle from '@source/apps/client/src/components/settings/settings-title';

const meta = {
  title: 'Components/SettingsTitle',
  component: SettingsTitle,
} satisfies Meta<typeof SettingsTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
