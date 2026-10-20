import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { RevokeApiKeyModal } from '@source/apps/client/src/ee/api-key/components/revoke-api-key-modal';
import { withPortalInside } from '../fixtures/decorators';
import { sampleApiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/RevokeApiKeyModal',
  component: RevokeApiKeyModal,
  decorators: [withPortalInside],
} satisfies Meta<typeof RevokeApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from a key's menu in the API keys table.
export const Default: Story = {
  args: { opened: true, onClose: fn(), apiKey: sampleApiKeys[0] },
};
