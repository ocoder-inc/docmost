import type { Meta, StoryObj } from '@storybook/react-vite';

import SettingsSidebar from '@source/apps/client/src/components/settings/settings-sidebar';
import { sampleCurrentUser, sampleUser, withApp } from '../fixtures/story-kit';
import type { ICurrentUser } from '@source/apps/client/src/features/user/types/user.types';

const version = { currentVersion: '0.23.2', latestVersion: '0.23.2', releaseUrl: 'https://github.com/docmost/docmost/releases/tag/v0.23.2' };

const meta = {
  title: 'Components/SettingsSidebar',
  component: SettingsSidebar,
  // The app shell's navbar on /settings routes: 300px wide, full height.
  decorators: [(Story) => <div style={{ width: 300, height: 700 }}><Story /></div>],
} satisfies Meta<typeof SettingsSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

// The settings navbar for a workspace owner with an enterprise licence, on the Profile page.
export const Default: Story = {
  parameters: { route: '/settings/account/profile' },
  decorators: [withApp({ queries: [[['version'], version]] })],
};

// A regular member on the free tier, on the Members page: admin-only items and the System
// section are hidden, and licensed items (API keys, Verified pages) are greyed out.
export const MemberFreeTier: Story = {
  parameters: { route: '/settings/members' },
  decorators: [
    withApp({
      currentUser: { ...sampleCurrentUser, user: { ...sampleUser, role: 'member' } } as ICurrentUser,
      entitlements: { cloud: false, tier: 'free', features: [] },
      queries: [[['version'], version]],
    }),
  ],
};
