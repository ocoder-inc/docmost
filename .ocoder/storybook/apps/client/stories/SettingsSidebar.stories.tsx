import type { Meta, StoryObj } from '@storybook/react-vite';

import SettingsSidebar from '@source/apps/client/src/components/settings/settings-sidebar';

// The app shell's navbar on settings routes: 300px wide, the page's height below the header.
const meta = {
  title: 'Components/SettingsSidebar',
  component: SettingsSidebar,
  decorators: [
    (Story) => (
      <nav style={{ width: 300, height: 700, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </nav>
    ),
  ],
  parameters: { route: '/settings/account/profile' },
} satisfies Meta<typeof SettingsSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
