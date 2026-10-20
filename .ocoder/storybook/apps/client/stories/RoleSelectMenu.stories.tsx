import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import RoleSelectMenu from '@source/apps/client/src/components/ui/role-select-menu';
import { userRoleData } from '@source/apps/client/src/features/workspace/types/user-role-data';
import { spaceRoleData } from '@source/apps/client/src/features/space/types/space-role-data';

// The role button in a row of the workspace members table.
const meta = {
  title: 'Components/RoleSelectMenu',
  component: RoleSelectMenu,
  args: { roles: userRoleData, roleName: 'Admin', onChange: fn() },
} satisfies Meta<typeof RoleSelectMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** In a space's members list. */
export const SpaceRoles: Story = {
  args: { roles: spaceRoleData, roleName: 'Can edit' },
};

export const Disabled: Story = {
  args: { roleName: 'Owner', disabled: true },
};
