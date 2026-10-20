import type { Meta, StoryObj } from '@storybook/react-vite';

import { ApiKeyCreatedModal } from '@source/apps/client/src/ee/api-key/components/api-key-created-modal';

const meta = {
  title: 'Components/ApiKeyCreatedModal',
  component: ApiKeyCreatedModal,
} satisfies Meta<typeof ApiKeyCreatedModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
