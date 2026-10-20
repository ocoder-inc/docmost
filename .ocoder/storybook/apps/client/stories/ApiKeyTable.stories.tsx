import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { sampleApiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/ApiKeyTable',
  component: ApiKeyTable,
  // The table on the API keys settings page, in its 900px container.
  decorators: [(Story) => <div style={{ maxWidth: 868 }}><Story /></div>],
  args: { onUpdate: fn(), onRevoke: fn() },
} satisfies Meta<typeof ApiKeyTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { apiKeys: sampleApiKeys },
};

// The workspace's API management page also shows who created each key.
export const WithUserColumn: Story = {
  args: { apiKeys: sampleApiKeys, showUserColumn: true },
};

export const Empty: Story = {
  args: { apiKeys: [] },
};
