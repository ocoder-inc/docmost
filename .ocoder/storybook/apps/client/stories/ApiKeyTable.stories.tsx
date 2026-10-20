import type { Meta, StoryObj } from '@storybook/react-vite';

import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';

const meta = {
  title: 'Components/ApiKeyTable',
  component: ApiKeyTable,
} satisfies Meta<typeof ApiKeyTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
