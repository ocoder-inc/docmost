import type { Meta, StoryObj } from '@storybook/react-vite';

import UserApiKeys from '@source/apps/client/src/ee/api-key/pages/user-api-keys';
import { inBox, withApi } from '../fixtures/decorators';
import { paginate } from '../fixtures/data';

const meta = {
  title: 'Components/UserApiKeys',
  component: UserApiKeys,
  // The settings page at /settings/account/api-keys, in the settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
  parameters: { route: '/settings/account/api-keys' },
} satisfies Meta<typeof UserApiKeys>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoKeys: Story = {
  decorators: [withApi({ '/api-keys': paginate([]) })],
};
