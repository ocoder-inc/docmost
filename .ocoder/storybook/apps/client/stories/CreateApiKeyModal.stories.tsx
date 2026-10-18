import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

import { CreateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/create-api-key-modal';

const meta = {
  title: 'Components/CreateApiKeyModal',
  component: CreateApiKeyModal,
  // The modal renders in a portal; keep the button that opened it in the story root.
  decorators: [
    (Story) => (
      <div>
        <Button>Create API Key</Button>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CreateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened by "Create API Key" on Settings > API keys and Account > API keys.
export const Default: Story = {
  args: { opened: true, onClose: () => {}, onSuccess: () => {} },
};
