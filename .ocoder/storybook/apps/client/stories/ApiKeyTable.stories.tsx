import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '@mantine/core';

import { ApiKeyTable } from '@source/apps/client/src/ee/api-key/components/api-key-table';
import { withApp } from '../fixtures/story-kit';
import { apiKeys } from '../fixtures/apikeys-data';

const meta = {
  title: 'Components/ApiKeyTable',
  component: ApiKeyTable,
  // The table fills the settings page's 900px content column.
  decorators: [
    (Story) => (
      <Container size={900} pt="md">
        <Story />
      </Container>
    ),
    withApp(),
  ],
  args: { onUpdate: () => {}, onRevoke: () => {} },
} satisfies Meta<typeof ApiKeyTable>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > API keys (workspace admin view): every member's keys, with a User column.
export const Default: Story = {
  args: { apiKeys, isLoading: false, showUserColumn: true },
};

// Account > API keys: the signed-in user's own keys, no User column.
export const UserKeys: Story = {
  args: { apiKeys: apiKeys.filter((k) => k.creatorId === apiKeys[0].creatorId), isLoading: false },
};

// No keys created yet.
export const Empty: Story = {
  args: { apiKeys: [], isLoading: false, showUserColumn: true },
};
