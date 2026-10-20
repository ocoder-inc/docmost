import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleDriveIcon } from '@source/apps/client/src/components/icons/google-drive-icon';

const meta = {
  title: 'Components/GoogleDriveIcon',
  component: GoogleDriveIcon,
} satisfies Meta<typeof GoogleDriveIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app shows it as a menu item's leading icon.
export const Default: Story = { args: { size: 16 } };
