import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { CreateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/create-api-key-modal';
import { withPortalInside } from '../fixtures/decorators';

const meta = {
  title: 'Components/CreateApiKeyModal',
  component: CreateApiKeyModal,
  decorators: [withPortalInside],
} satisfies Meta<typeof CreateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from "Create API Key" on the API keys settings page.
export const Default: Story = {
  args: { opened: true, onClose: fn(), onSuccess: fn() },
};
