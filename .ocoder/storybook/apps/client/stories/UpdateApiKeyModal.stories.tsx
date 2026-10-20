import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { UpdateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/update-api-key-modal';
import { modalsInline } from '../fixtures/decorators';
import { apiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/UpdateApiKeyModal',
  component: UpdateApiKeyModal,
  decorators: [modalsInline],
  args: { opened: true, onClose: fn() },
} satisfies Meta<typeof UpdateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Renaming a key from the table's menu.
export const Default: Story = {
  args: { apiKey: apiKeys[1] },
};
