import type { Meta, StoryObj } from '@storybook/react-vite';

import SettingsSidebar from '@source/apps/client/src/components/settings/settings-sidebar';

const meta = {
  title: 'Components/SettingsSidebar',
  component: SettingsSidebar,
} satisfies Meta<typeof SettingsSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
