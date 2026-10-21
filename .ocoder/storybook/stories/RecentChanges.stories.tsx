import type { Meta, StoryObj } from '@storybook/react-vite';

import RecentChanges from '@source/apps/client/src/components/common/recent-changes';
import api from '@source/apps/client/src/lib/api-client';
import { getAdapter } from 'axios';

const originalAdapter = getAdapter(api.defaults.adapter);
api.defaults.adapter = async (config) => {
  if (config.url === '/pages/recent') {
    return {
      config,
      status: 200,
      statusText: 'OK',
      headers: {},
      request: { responseURL: 'http://localhost/api/pages/recent' },
      data: { data: {
        items: [
          { id: 'page-1', slugId: 'welcome', slug: 'welcome', title: 'Getting started', icon: '📘', isBase: false, updatedAt: '2026-10-20T12:00:00Z', space: { name: 'Team Wiki', slug: 'team-wiki' } },
          { id: 'page-2', slugId: 'project-plan', slug: 'project-plan', title: 'Project plan', icon: '📋', isBase: false, updatedAt: '2026-10-19T12:00:00Z', space: { name: 'Projects', slug: 'projects' } },
        ],
        meta: { hasNextPage: false, nextCursor: null },
      } },
    };
  }
  return originalAdapter(config);
};

const meta = {
  title: 'Components/RecentChanges',
  component: RecentChanges,
} satisfies Meta<typeof RecentChanges>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
