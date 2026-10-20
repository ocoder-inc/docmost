import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { CreateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/create-api-key-modal';
import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { apiKeys } from '../fixtures/data';

// Opened by "Create API Key" on the API keys settings page.
const meta = {
  title: 'Components/CreateApiKeyModal',
  component: CreateApiKeyModal,
  decorators: [
    // Opened over the API keys settings page.
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <ApiKeyTable apiKeys={apiKeys} />
        <Story />
      </div>
    ),
  ],
  args: { opened: true, onClose: fn(), onSuccess: fn() },
} satisfies Meta<typeof CreateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
