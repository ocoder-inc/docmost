import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoomIcon } from '@source/apps/client/src/components/icons/loom-icon';

const meta = {
  title: 'Components/LoomIcon',
  component: LoomIcon,
} satisfies Meta<typeof LoomIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus and the SSO buttons show it at.
export const Default: Story = {
  args: { size: 16 },
};
