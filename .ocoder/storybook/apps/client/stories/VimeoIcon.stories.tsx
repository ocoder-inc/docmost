import type { Meta, StoryObj } from '@storybook/react-vite';

import { VimeoIcon } from '@source/apps/client/src/components/icons/vimeo-icon';

const meta = {
  title: 'Components/VimeoIcon',
  component: VimeoIcon,
} satisfies Meta<typeof VimeoIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
