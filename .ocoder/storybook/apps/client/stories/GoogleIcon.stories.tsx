import type { Meta, StoryObj } from '@storybook/react-vite';

import { GoogleIcon } from '@source/apps/client/src/components/icons/google-icon';

const meta = {
  title: 'Components/GoogleIcon',
  component: GoogleIcon,
} satisfies Meta<typeof GoogleIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
