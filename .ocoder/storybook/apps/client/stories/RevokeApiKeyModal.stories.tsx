import type { Meta, StoryObj } from '@storybook/react-vite';

import { RevokeApiKeyModal } from '@source/apps/client/src/ee/api-key/components/revoke-api-key-modal';

const meta = {
  title: 'Components/RevokeApiKeyModal',
  component: RevokeApiKeyModal,
} satisfies Meta<typeof RevokeApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
