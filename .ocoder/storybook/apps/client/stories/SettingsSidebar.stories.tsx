import type { Meta, StoryObj } from '@storybook/react-vite';

import SettingsSidebar from '@source/apps/client/src/components/settings/settings-sidebar';
import { withNavbar } from '../fixtures/decorators';

const meta = {
  title: 'Components/SettingsSidebar',
  component: SettingsSidebar,
  decorators: [withNavbar],
  parameters: { route: '/settings/account/profile' },
} satisfies Meta<typeof SettingsSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ApiManagementActive: Story = {
  parameters: { route: '/settings/api-keys' },
};
