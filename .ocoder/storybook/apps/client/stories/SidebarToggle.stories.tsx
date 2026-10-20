import type { Meta, StoryObj } from '@storybook/react-vite';

import SidebarToggle from '@source/apps/client/src/components/ui/sidebar-toggle-button';

const meta = {
  title: 'Components/SidebarToggle',
  component: SidebarToggle,
} satisfies Meta<typeof SidebarToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

// In the header, while the sidebar is open.
export const Default: Story = {
  args: { opened: true, size: 'sm', 'aria-label': 'Sidebar toggle' },
};

export const Collapsed: Story = {
  args: { opened: false, size: 'sm', 'aria-label': 'Sidebar toggle' },
};
