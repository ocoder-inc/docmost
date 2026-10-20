import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import RoleSelectMenu from '@source/apps/client/src/components/ui/role-select-menu';
import { userRoleData } from '@source/apps/client/src/features/workspace/types/user-role-data';
import { spaceRoleData } from '@source/apps/client/src/features/space/types/space-role-data';

const meta = {
  title: 'Components/RoleSelectMenu',
  component: RoleSelectMenu,
  args: { onChange: fn() },
} satisfies Meta<typeof RoleSelectMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// A row of the workspace members table.
export const Default: Story = {
  args: { roles: userRoleData, roleName: 'Admin' },
};

// A row of a space's members table.
export const SpaceRole: Story = {
  args: { roles: spaceRoleData, roleName: 'Can edit' },
};

// Members without permission to change roles see it disabled.
export const Disabled: Story = {
  args: { roles: userRoleData, roleName: 'Member', disabled: true },
};
