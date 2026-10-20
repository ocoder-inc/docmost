import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { RevokeApiKeyModal } from '@source/apps/client/src/ee/api-key/components/revoke-api-key-modal';
import { modalsInline } from '../fixtures/decorators';
import { apiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/RevokeApiKeyModal',
  component: RevokeApiKeyModal,
  decorators: [modalsInline],
  args: { opened: true, onClose: fn() },
} satisfies Meta<typeof RevokeApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Confirming before a key stops working.
export const Default: Story = {
  args: { apiKey: apiKeys[1] },
};
