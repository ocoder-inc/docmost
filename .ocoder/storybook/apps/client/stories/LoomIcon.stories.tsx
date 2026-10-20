import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoomIcon } from '@source/apps/client/src/components/icons/loom-icon';

const meta = {
  title: 'Components/LoomIcon',
  component: LoomIcon,
} satisfies Meta<typeof LoomIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app shows it as a menu item's leading icon.
export const Default: Story = { args: { size: 16 } };
