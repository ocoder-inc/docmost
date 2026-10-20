import type { Meta, StoryObj } from '@storybook/react-vite';

import SidebarToggle from '@source/apps/client/src/components/ui/sidebar-toggle-button';

const meta = {
  title: 'Components/SidebarToggle',
  component: SidebarToggle,
} satisfies Meta<typeof SidebarToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 'aria-label': 'Sidebar toggle', opened: true, size: 'sm' },
};

export const Collapsed: Story = {
  args: { 'aria-label': 'Sidebar toggle', opened: false, size: 'sm' },
};
