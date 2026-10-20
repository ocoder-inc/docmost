import type { Meta, StoryObj } from '@storybook/react-vite';

import AppVersion from '@source/apps/client/src/components/settings/app-version';
import { withApi } from '../fixtures/decorators';

const meta = {
  title: 'Components/AppVersion',
  component: AppVersion,
} satisfies Meta<typeof AppVersion>;
export default meta;
type Story = StoryObj<typeof meta>;

// The installed version, at the bottom of the settings sidebar.
export const Default: Story = {};

export const UpdateAvailable: Story = {
  decorators: [
    withApi({ '/version': { currentVersion: '0.23.2', latestVersion: '0.24.0', releaseUrl: '' } }),
  ],
};
