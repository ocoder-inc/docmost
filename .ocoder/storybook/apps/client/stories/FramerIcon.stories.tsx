import type { Meta, StoryObj } from '@storybook/react-vite';

import { FramerIcon } from '@source/apps/client/src/components/icons/framer-icon';

const meta = {
  title: 'Components/FramerIcon',
  component: FramerIcon,
} satisfies Meta<typeof FramerIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus and the SSO buttons show it at.
export const Default: Story = {
  args: { size: 16 },
};
