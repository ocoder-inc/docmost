import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { CreateApiKeyModal } from '@source/apps/client/src/ee/api-key/components/create-api-key-modal';
import { modalsInline } from '../fixtures/decorators';

const meta = {
  title: 'Components/CreateApiKeyModal',
  component: CreateApiKeyModal,
  decorators: [modalsInline],
  args: { opened: true, onClose: fn(), onSuccess: fn() },
} satisfies Meta<typeof CreateApiKeyModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
