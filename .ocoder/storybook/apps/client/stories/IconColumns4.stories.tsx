import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconColumns4 } from '@source/apps/client/src/components/icons/icon-columns-4';

const meta = {
  title: 'Components/IconColumns4',
  component: IconColumns4,
} satisfies Meta<typeof IconColumns4>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus show it at.
export const Default: Story = {
  args: { size: 16 },
};
