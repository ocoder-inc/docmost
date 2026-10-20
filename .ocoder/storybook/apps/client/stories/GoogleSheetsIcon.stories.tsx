import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleSheetsIcon } from '@source/apps/client/src/components/icons/google-sheets-icon';

const meta = {
  title: 'Components/GoogleSheetsIcon',
  component: GoogleSheetsIcon,
} satisfies Meta<typeof GoogleSheetsIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
