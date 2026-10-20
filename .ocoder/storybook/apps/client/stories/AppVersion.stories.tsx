import type { Meta, StoryObj } from '@storybook/react-vite';

import AppVersion from '@source/apps/client/src/components/settings/app-version';
import { withApi } from '../.storybook/providers';

// Shown at the bottom of the settings sidebar on self-hosted workspaces.
const meta = {
  title: 'Components/AppVersion',
  component: AppVersion,
} satisfies Meta<typeof AppVersion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const UpdateAvailable: Story = {
  decorators: [
    withApi({
      '/version': () => ({ currentVersion: '0.24.1', latestVersion: '0.25.0', releaseUrl: '' }),
    }),
  ],
};
