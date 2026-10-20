import type { Meta, StoryObj } from '@storybook/react-vite';

import SidebarToggle from '@source/apps/client/src/components/ui/sidebar-toggle-button';

const meta = {
  title: 'Components/SidebarToggle',
  component: SidebarToggle,
} satisfies Meta<typeof SidebarToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
