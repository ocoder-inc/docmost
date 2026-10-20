import type { Meta, StoryObj } from '@storybook/react-vite';

import UserApiKeys from '@source/apps/client/src/ee/api-key/pages/user-api-keys';

// The account's API keys settings page, as the app shell's 900px settings container shows it.
const meta = {
  title: 'Components/UserApiKeys',
  component: UserApiKeys,
  decorators: [(Story) => <div style={{ maxWidth: 900, margin: '0 auto' }}><Story /></div>],
  parameters: { route: '/settings/account/api-keys' },
} satisfies Meta<typeof UserApiKeys>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
