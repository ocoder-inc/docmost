import type { Meta, StoryObj } from '@storybook/react-vite';

import RoleSelectMenu from '@source/apps/client/src/components/ui/role-select-menu';

const meta = {
  title: 'Components/RoleSelectMenu',
  component: RoleSelectMenu,
} satisfies Meta<typeof RoleSelectMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
