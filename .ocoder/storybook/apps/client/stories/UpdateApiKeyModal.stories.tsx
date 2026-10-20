import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { UpdateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/update-api-key-modal';
import { withPortalInside } from '../fixtures/decorators';
import { sampleApiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/UpdateApiKeyModal',
  component: UpdateApiKeyModal,
  decorators: [withPortalInside],
} satisfies Meta<typeof UpdateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from a key's menu in the API keys table.
export const Default: Story = {
  args: { opened: true, onClose: fn(), apiKey: sampleApiKeys[0] },
};
