import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@source/apps/client/src/App';
import { withQueryData } from '../fixtures/query-data';

const meta = {
  title: 'Components/App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

// The sign-in page a signed-out visitor lands on: the workspace's public data, and no current user.
export const Default: Story = {
  parameters: { route: '/login' },
  decorators: [
    withQueryData([
      [['currentUser'], null],
      [
        ['workspace-public'],
        { id: '019a2f3c-0000-7000-8000-000000000001', name: 'Acme', logo: null, hostname: 'acme', enforceSso: false, authProviders: [] },
      ],
    ]),
  ],
};
