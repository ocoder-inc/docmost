import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { UpdateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/update-api-key-modal';
import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { apiKeys } from '../fixtures/data';

// Opened by "Rename" in an API key's row menu.
const meta = {
  title: 'Components/UpdateApiKeyModal',
  component: UpdateApiKeyModal,
  decorators: [
    // Opened over the API keys settings page.
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <ApiKeyTable apiKeys={apiKeys} />
        <Story />
      </div>
    ),
  ],
  args: { opened: true, onClose: fn(), apiKey: apiKeys[0] },
} satisfies Meta<typeof UpdateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
