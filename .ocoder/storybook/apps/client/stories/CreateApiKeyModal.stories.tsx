import type { Meta, StoryObj } from '@storybook/react-vite';

import { CreateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/create-api-key-modal';

const meta = {
  title: 'Components/CreateApiKeyModal',
  component: CreateApiKeyModal,
} satisfies Meta<typeof CreateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
