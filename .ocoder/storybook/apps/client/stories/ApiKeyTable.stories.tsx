import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { inBox } from '../fixtures/decorators';
import { apiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/ApiKeyTable',
  component: ApiKeyTable,
  // The API keys settings page's 900px column.
  decorators: [inBox({ maxWidth: 900 })],
  args: { onUpdate: fn(), onRevoke: fn(), isLoading: false },
} satisfies Meta<typeof ApiKeyTable>;
export default meta;
type Story = StoryObj<typeof meta>;

// The user's own keys.
export const Default: Story = {
  args: { apiKeys },
};

// The workspace API keys page, which shows whose key each is.
export const WithUserColumn: Story = {
  args: { apiKeys, showUserColumn: true },
};

export const Empty: Story = {
  args: { apiKeys: [] },
};
