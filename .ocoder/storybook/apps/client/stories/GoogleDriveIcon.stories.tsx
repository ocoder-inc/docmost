import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleDriveIcon } from '@source/apps/client/src/components/icons/google-drive-icon';

const meta = {
  title: 'Components/GoogleDriveIcon',
  component: GoogleDriveIcon,
} satisfies Meta<typeof GoogleDriveIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus and the SSO buttons show it at.
export const Default: Story = {
  args: { size: 16 },
};
