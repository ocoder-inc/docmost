import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppHeader } from '@source/apps/client/src/components/layouts/global/app-header';
import { withApp, sampleCurrentUser } from '../fixtures/story-kit';
import { shellQueries, unreadCountQuery, favoriteSpacesQuery, personalSpaceQuery } from '../fixtures/layout-kit';

const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  parameters: { route: '/home', layout: 'fullscreen' },
  // GlobalAppShell renders the header in a 45px bar across the top of every signed-in page.
  decorators: [
    (Story) => (
      <header
        style={{
          height: 45,
          borderBottom: '1px solid var(--mantine-color-default-border)',
          background: 'var(--mantine-color-body)',
        }}
      >
        <Story />
      </header>
    ),
  ],
} satisfies Meta<typeof AppHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

// The header on the home page of a workspace with AI chat on, with 3 unread notifications.
export const Default: Story = {
  decorators: [withApp({ queries: shellQueries })],
};

// A workspace with AI chat turned off and no unread notifications.
export const WithoutAiChat: Story = {
  decorators: [
    withApp({
      currentUser: {
        ...sampleCurrentUser,
        workspace: {
          ...sampleCurrentUser.workspace,
          settings: { ai: { search: false, generative: false, chat: false } },
        } as never,
      },
      queries: [favoriteSpacesQuery, unreadCountQuery(0), personalSpaceQuery],
    }),
  ],
};
