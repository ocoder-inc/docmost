import type { Meta, StoryObj } from '@storybook/react-vite';

import SettingsSidebar from '@source/apps/client/src/components/settings/settings-sidebar';
import { shellBackground } from '../fixtures/decorators';

const meta = {
  title: 'Components/SettingsSidebar',
  component: SettingsSidebar,
  // The app shell's navbar on settings pages: 300px wide, below the 45px header.
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 755, display: 'flex', flexDirection: 'column', background: shellBackground }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen', route: '/settings/account/profile' },
} satisfies Meta<typeof SettingsSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
