import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '@mantine/core';

import RestrictApiToAdmins from '@source/apps/client/src/ee/api-key/components/restrict-api-to-admins';
import { withApp } from '../fixtures/story-kit';
import { restrictedApiUser } from '../fixtures/apikeys-data';

const meta = {
  title: 'Components/RestrictApiToAdmins',
  component: RestrictApiToAdmins,
  // A row at the top of Settings > API keys, in the app shell's 900px content column.
  decorators: [
    (Story) => (
      <Container size={900} pt="md">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof RestrictApiToAdmins>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > API keys (workspace admin view), restriction off.
export const Default: Story = {
  decorators: [withApp()],
};

// The same row once an admin has limited API key creation to admins.
export const Restricted: Story = {
  decorators: [withApp({ currentUser: restrictedApiUser })],
};
