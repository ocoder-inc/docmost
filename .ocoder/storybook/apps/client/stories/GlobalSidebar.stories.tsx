import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalSidebar from '@source/apps/client/src/components/layouts/global/global-sidebar';

// The app shell's navbar outside spaces and settings: 300px wide, the page's height below the header.
const meta = {
  title: 'Components/GlobalSidebar',
  component: GlobalSidebar,
  decorators: [
    (Story) => (
      <nav style={{ width: 300, height: 700, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </nav>
    ),
  ],
  parameters: { route: '/home' },
} satisfies Meta<typeof GlobalSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
