import type { Meta, StoryObj } from '@storybook/react-vite';

import { MiroIcon } from '@source/apps/client/src/components/icons/miro-icon';

const meta = {
  title: 'Components/MiroIcon',
  component: MiroIcon,
} satisfies Meta<typeof MiroIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
