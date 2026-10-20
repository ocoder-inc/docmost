import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ApiKeyCreatedModal } from '@source/apps/client/src/ee/api-key/components/api-key-created-modal';
import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { apiKeys, createdApiKey } from '../fixtures/data';

// Opened right after a key is created, the only time its token is shown.
const meta = {
  title: 'Components/ApiKeyCreatedModal',
  component: ApiKeyCreatedModal,
  decorators: [
    // Opened over the API keys settings page.
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <ApiKeyTable apiKeys={apiKeys} />
        <Story />
      </div>
    ),
  ],
  args: { opened: true, onClose: fn(), apiKey: createdApiKey },
} satisfies Meta<typeof ApiKeyCreatedModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
