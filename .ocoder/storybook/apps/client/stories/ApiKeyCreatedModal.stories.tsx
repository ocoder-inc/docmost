import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

import { ApiKeyCreatedModal } from '@source/apps/client/src/ee/api-key/components/api-key-created-modal';
import { createdApiKey } from '../fixtures/apikeys-data';

const meta = {
  title: 'Components/ApiKeyCreatedModal',
  component: ApiKeyCreatedModal,
  // The modal renders in a portal; keep the button that opened the create flow in the story root.
  decorators: [
    (Story) => (
      <div>
        <Button>Create API Key</Button>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ApiKeyCreatedModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Shown on the API keys pages right after a key is created, with its one-time token.
export const Default: Story = {
  args: { opened: true, onClose: () => {}, apiKey: createdApiKey },
};
