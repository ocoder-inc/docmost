import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalSidebar from '@source/apps/client/src/components/layouts/global/global-sidebar';
import { shellBackground, withApi } from '../fixtures/decorators';
import { paginate } from '../fixtures/data';

const meta = {
  title: 'Components/GlobalSidebar',
  component: GlobalSidebar,
  // The app shell's navbar outside spaces and settings: 300px wide, below the 45px header.
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 755, display: 'flex', flexDirection: 'column', background: shellBackground }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen', route: '/home' },
} satisfies Meta<typeof GlobalSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

// On the home page, with two favorite spaces.
export const Default: Story = {};

export const NoFavorites: Story = {
  decorators: [withApi({ '/favorites': paginate([]) })],
};
