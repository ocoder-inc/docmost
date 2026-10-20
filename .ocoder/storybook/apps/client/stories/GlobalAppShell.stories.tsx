import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalAppShell from '@source/apps/client/src/components/layouts/global/global-app-shell';
import Home from '@source/apps/client/src/pages/dashboard/home';

const meta = {
  title: 'Components/GlobalAppShell',
  component: GlobalAppShell,
  // The app's whole-window layout: header, navbar and main area.
  parameters: { layout: 'fullscreen', route: '/home' },
} satisfies Meta<typeof GlobalAppShell>;
export default meta;
type Story = StoryObj<typeof meta>;

// Around the home page, as the app renders it at /home.
export const Default: Story = {
  args: { children: <Home /> },
};
