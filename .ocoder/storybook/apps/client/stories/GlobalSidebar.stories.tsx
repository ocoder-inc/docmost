import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalSidebar from '@source/apps/client/src/components/layouts/global/global-sidebar';
import { withApp } from '../fixtures/story-kit';
import { favoriteSpacesQuery, noFavoriteSpacesQuery } from '../fixtures/layout-kit';

const meta = {
  title: 'Components/GlobalSidebar',
  component: GlobalSidebar,
  parameters: { route: '/home' },
  // GlobalAppShell shows it as the 300px navbar below the 45px header outside spaces and settings.
  decorators: [
    (Story) => (
      <nav style={{ width: 300, height: 755, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </nav>
    ),
  ],
} satisfies Meta<typeof GlobalSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

// The sidebar on the home page, with three favourite spaces.
export const Default: Story = {
  decorators: [withApp({ queries: [favoriteSpacesQuery] })],
};

// A member who has not favourited any space yet.
export const NoFavorites: Story = {
  decorators: [withApp({ queries: [noFavoriteSpacesQuery] })],
};
