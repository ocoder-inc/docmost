import type { Meta, StoryObj } from '@storybook/react-vite';

import { UserInfo } from '@source/apps/client/src/components/common/user-info';

const meta = {
  title: 'Components/UserInfo',
  component: UserInfo,
} satisfies Meta<typeof UserInfo>;
export default meta;
type Story = StoryObj<typeof meta>;

// As on the OAuth consent page: the signed-in user.
export const Default: Story = {
  args: {
    user: {
      id: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      avatarUrl: null,
    },
  },
};
