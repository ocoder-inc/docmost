import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ApiKeyCreatedModal } from '@source/apps/client/src/ee/api-key/components/api-key-created-modal';
import { withPortalInside } from '../fixtures/decorators';
import { sampleApiKeys } from '../fixtures/data';

const meta = {
  title: 'Components/ApiKeyCreatedModal',
  component: ApiKeyCreatedModal,
  decorators: [withPortalInside],
} satisfies Meta<typeof ApiKeyCreatedModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Shown once, right after a key is created, with its token.
export const Default: Story = {
  args: {
    opened: true,
    onClose: fn(),
    apiKey: { ...sampleApiKeys[0], token: 'dm_live_8f2c1a9e4b7d4c0f9a3e2b1c5d6e7f80a1b2c3d4' },
  },
};
