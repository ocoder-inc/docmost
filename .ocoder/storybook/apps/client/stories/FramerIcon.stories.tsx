import type { Meta, StoryObj } from '@storybook/react-vite';

import { FramerIcon } from '@source/apps/client/src/components/icons/framer-icon';

const meta = {
  title: 'Components/FramerIcon',
  component: FramerIcon,
} satisfies Meta<typeof FramerIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
