import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleSheetsIcon } from '@source/apps/client/src/components/icons/google-sheets-icon';

const meta = {
  title: 'Components/GoogleSheetsIcon',
  component: GoogleSheetsIcon,
} satisfies Meta<typeof GoogleSheetsIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app shows it as a menu item's leading icon.
export const Default: Story = { args: { size: 16 } };
