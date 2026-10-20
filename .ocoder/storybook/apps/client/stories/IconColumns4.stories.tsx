import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconColumns4 } from '@source/apps/client/src/components/icons/icon-columns-4';

const meta = {
  title: 'Components/IconColumns4',
  component: IconColumns4,
} satisfies Meta<typeof IconColumns4>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
