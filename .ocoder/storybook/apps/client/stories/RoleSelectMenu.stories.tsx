import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import RoleSelectMenu from '@source/apps/client/src/components/ui/role-select-menu';
import { userRoleData } from '@source/apps/client/src/features/workspace/types/user-role-data';
import { spaceRoleData } from '@source/apps/client/src/features/space/types/space-role-data';

const meta = {
  title: 'Components/RoleSelectMenu',
  component: RoleSelectMenu,
} satisfies Meta<typeof RoleSelectMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// A member's role in the workspace members table.
export const Default: Story = {
  args: { roles: userRoleData, roleName: 'Admin', onChange: fn() },
};

export const SpaceRole: Story = {
  args: { roles: spaceRoleData, roleName: 'Can edit', onChange: fn() },
};
