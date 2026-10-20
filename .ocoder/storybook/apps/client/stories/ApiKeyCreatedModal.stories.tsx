import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ApiKeyCreatedModal } from '@source/apps/client/src/ee/api-key/components/api-key-created-modal';
import { modalsInline } from '../fixtures/decorators';
import { apiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/ApiKeyCreatedModal',
  component: ApiKeyCreatedModal,
  decorators: [modalsInline],
  args: { opened: true, onClose: fn() },
} satisfies Meta<typeof ApiKeyCreatedModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Right after a key is created: its token, shown this once.
export const Default: Story = {
  args: {
    apiKey: { ...apiKeys[0], token: 'dm_live_8f2c41a9e7b3d05c6a1f4e9b2d7c3a60' },
  },
};
