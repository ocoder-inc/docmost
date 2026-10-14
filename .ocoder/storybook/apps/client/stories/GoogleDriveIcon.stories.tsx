import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleDriveIcon } from '@source/apps/client/src/components/icons/google-drive-icon';

const meta = {
  title: 'Components/GoogleDriveIcon',
  component: GoogleDriveIcon,
} satisfies Meta<typeof GoogleDriveIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
