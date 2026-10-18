import type { Meta, StoryObj } from '@storybook/react-vite';

import RestrictApiToAdmins from '@source/apps/client/src/ee/api-key/components/restrict-api-to-admins';

const meta = {
  title: 'Components/RestrictApiToAdmins',
  component: RestrictApiToAdmins,
} satisfies Meta<typeof RestrictApiToAdmins>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
