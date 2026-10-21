import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@source/apps/client/src/App';
import api from '@source/apps/client/src/lib/api-client';
import { getAdapter } from 'axios';

const originalAdapter = getAdapter(api.defaults.adapter);
api.defaults.adapter = async (config) => {
  if (config.url === '/workspace/public' || config.url === '/users/me') {
    return {
      config,
      status: 200,
      statusText: 'OK',
      headers: {},
      request: { responseURL: `http://localhost/api${config.url}` },
      data: { data: config.url === '/workspace/public'
        ? { id: 'sample-workspace', name: 'Team Wiki', enforceSso: false, authProviders: [] }
        : { user: null } },
    };
  }
  return originalAdapter(config);
};

const meta = {
  title: 'Components/App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { parameters: { route: '/login' } };
