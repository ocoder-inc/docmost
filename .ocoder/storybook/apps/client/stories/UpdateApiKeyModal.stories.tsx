import type { Meta, StoryObj } from '@storybook/react-vite';

import { UpdateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/update-api-key-modal';

const meta = {
  title: 'Components/UpdateApiKeyModal',
  component: UpdateApiKeyModal,
} satisfies Meta<typeof UpdateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
