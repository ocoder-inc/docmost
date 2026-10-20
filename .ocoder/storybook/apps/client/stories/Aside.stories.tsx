import type { Meta, StoryObj } from '@storybook/react-vite';

import Aside from '@source/apps/client/src/components/layouts/global/aside';
import { asideStateAtom } from '@source/apps/client/src/components/layouts/global/hooks/atoms/sidebar-atom';
import { atRoutePattern, shellBackground, withAtoms } from '../fixtures/decorators';

const meta = {
  title: 'Components/Aside',
  component: Aside,
  // The app shell's aside on a page: 350px wide, below the 45px header.
  decorators: [
    atRoutePattern('/s/:spaceSlug/p/:pageSlug'),
    (Story) => (
      <div style={{ width: 350, height: 755, background: shellBackground }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen', route: '/s/engineering/p/deployment-runbook-Xk3PqR8sTv' },
} satisfies Meta<typeof Aside>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened with the header's "AI Chat" link while reading a page.
export const Default: Story = {
  decorators: [withAtoms([[asideStateAtom, { tab: 'chat', isAsideOpen: true }]])],
};
