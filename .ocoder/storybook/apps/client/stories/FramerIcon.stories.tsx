import type { Meta, StoryObj } from '@storybook/react-vite';

import { FramerIcon } from '@source/apps/client/src/components/icons/framer-icon';

const meta = {
  title: 'Components/FramerIcon',
  component: FramerIcon,
} satisfies Meta<typeof FramerIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app shows it as a menu item's leading icon.
export const Default: Story = { args: { size: 16 } };
