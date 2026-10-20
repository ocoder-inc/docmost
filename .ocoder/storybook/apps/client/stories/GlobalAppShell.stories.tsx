import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalAppShell from '@source/apps/client/src/components/layouts/global/global-app-shell';
import Home from '@source/apps/client/src/pages/dashboard/home';

// The app shell: header, sidebar and the page in its main area. It fills the page.
const meta = {
  title: 'Components/GlobalAppShell',
  component: GlobalAppShell,
  parameters: { route: '/home' },
} satisfies Meta<typeof GlobalAppShell>;
export default meta;
type Story = StoryObj<typeof meta>;

/** At /home, with the home page in it. */
export const Default: Story = {
  args: { children: <Home /> },
};

/** On a settings route the sidebar is the settings navigation. */
export const Settings: Story = {
  args: { children: <div /> },
  parameters: { route: '/settings/account/profile' },
};
