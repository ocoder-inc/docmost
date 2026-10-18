import type { Meta, StoryObj } from '@storybook/react-vite';

import AppVersion from '@source/apps/client/src/components/settings/app-version';
import { withApp } from '../fixtures/story-kit';

const meta = {
  title: 'Components/AppVersion',
  component: AppVersion,
  // Shown at the foot of the settings sidebar, which is 300px wide.
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
} satisfies Meta<typeof AppVersion>;
export default meta;
type Story = StoryObj<typeof meta>;

// Foot of the settings sidebar on a self-hosted install that is up to date.
export const Default: Story = {
  decorators: [
    withApp({
      queries: [
        [['version'], { currentVersion: '0.23.2', latestVersion: '0.23.2', releaseUrl: 'https://github.com/docmost/docmost/releases/tag/v0.23.2' }],
      ],
    }),
  ],
};

// A newer release exists: the "New update" indicator shows next to the version.
export const UpdateAvailable: Story = {
  decorators: [
    withApp({
      queries: [
        [['version'], { currentVersion: '0.22.0', latestVersion: '0.23.2', releaseUrl: 'https://github.com/docmost/docmost/releases/tag/v0.23.2' }],
      ],
    }),
  ],
};
