import type { Meta, StoryObj } from '@storybook/react-vite';

import { FigmaIcon } from '@source/apps/client/src/components/icons/figma-icon';

const meta = {
  title: 'Components/FigmaIcon',
  component: FigmaIcon,
} satisfies Meta<typeof FigmaIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
