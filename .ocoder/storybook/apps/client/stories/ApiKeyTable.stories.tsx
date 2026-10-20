import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { apiKeys } from '../fixtures/data';

// The table on the API keys settings pages, in the settings column (900px at most).
const meta = {
  title: 'Components/ApiKeyTable',
  component: ApiKeyTable,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
  args: { apiKeys, isLoading: false, onUpdate: fn(), onRevoke: fn() },
} satisfies Meta<typeof ApiKeyTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The workspace API management page lists every member's keys with their creator. */
export const WithUserColumn: Story = {
  args: { showUserColumn: true },
};

export const Empty: Story = {
  args: { apiKeys: [] },
};
