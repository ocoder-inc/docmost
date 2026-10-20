import type { Meta, StoryObj } from '@storybook/react-vite';

import UserApiKeys from '@source/apps/client/src/ee/api-key/pages/user-api-keys';

// The /settings/account/api-keys page, in the settings column (900px at most).
const meta = {
  title: 'Components/UserApiKeys',
  component: UserApiKeys,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { route: '/settings/account/api-keys' },
} satisfies Meta<typeof UserApiKeys>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
