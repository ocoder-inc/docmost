import type { Meta, StoryObj } from '@storybook/react-vite';

import UserApiKeys from '@source/apps/client/src/ee/api-key/pages/user-api-keys';

const meta = {
  title: 'Components/UserApiKeys',
  component: UserApiKeys,
} satisfies Meta<typeof UserApiKeys>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
