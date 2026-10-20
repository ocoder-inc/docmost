import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconColumns5 } from '@source/apps/client/src/components/icons/icon-columns-5';

const meta = {
  title: 'Components/IconColumns5',
  component: IconColumns5,
} satisfies Meta<typeof IconColumns5>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus show it at.
export const Default: Story = {
  args: { size: 16 },
};
