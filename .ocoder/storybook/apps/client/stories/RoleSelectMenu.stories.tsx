import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import RoleSelectMenu from '@source/apps/client/src/components/ui/role-select-menu';
import { userRoleData } from '@source/apps/client/src/features/workspace/types/user-role-data';

const meta = {
  title: 'Components/RoleSelectMenu',
  component: RoleSelectMenu,
} satisfies Meta<typeof RoleSelectMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// The role cell of a row in the workspace members table (/settings/members), seen by an admin.
export const Default: Story = {
  args: { roles: userRoleData, roleName: 'Admin', onChange: () => {} },
};

// The same menu opened: each role with its description, the current one ticked.
export const Opened: Story = {
  args: { roles: userRoleData, roleName: 'Admin', onChange: () => {} },
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Admin' }));
  },
};

// Disabled, as for a member whose role the viewer cannot change.
export const Disabled: Story = {
  args: { roles: userRoleData, roleName: 'Member', disabled: true },
};
