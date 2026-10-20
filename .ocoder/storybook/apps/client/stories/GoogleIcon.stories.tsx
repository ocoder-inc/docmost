import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleIcon } from '@source/apps/client/src/components/icons/google-icon';

const meta = {
  title: 'Components/GoogleIcon',
  component: GoogleIcon,
} satisfies Meta<typeof GoogleIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
