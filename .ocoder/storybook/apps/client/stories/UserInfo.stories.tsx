import type { Meta, StoryObj } from '@storybook/react-vite';

import { UserInfo } from '@source/apps/client/src/components/common/user-info';
import { sampleUser } from '../fixtures/data';

const meta = {
  title: 'Components/UserInfo',
  component: UserInfo,
} satisfies Meta<typeof UserInfo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { user: sampleUser },
};
