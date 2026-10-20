import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import SidebarToggle from '@source/apps/client/src/components/ui/sidebar-toggle-button';

// The button at the left of the app header that shows and hides the sidebar.
const meta = {
  title: 'Components/SidebarToggle',
  component: SidebarToggle,
  args: { opened: true, size: 'sm', 'aria-label': 'Sidebar toggle', onClick: fn() },
} satisfies Meta<typeof SidebarToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  args: { opened: false },
};
