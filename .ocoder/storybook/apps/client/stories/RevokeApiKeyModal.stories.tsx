import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionIcon } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

import { RevokeApiKeyModal } from '@source/apps/client/src/ee/api-key/components/revoke-api-key-modal';
import { apiKeys } from '../fixtures/apikeys-data';

const meta = {
  title: 'Components/RevokeApiKeyModal',
  component: RevokeApiKeyModal,
  // The modal renders in a portal; keep the row menu button that opened it in the story root.
  decorators: [
    (Story) => (
      <div>
        <ActionIcon variant="subtle" color="gray" aria-label="API key menu">
          <IconDots size={16} />
        </ActionIcon>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RevokeApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from "Revoke" in an API key row's menu.
export const Default: Story = {
  args: { opened: true, onClose: () => {}, apiKey: apiKeys[1] },
};
