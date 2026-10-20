import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppHeader } from '@source/apps/client/src/components/layouts/global/app-header';

// The app shell's header: full width, 45px high, with a bottom border.
const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  decorators: [
    (Story) => (
      <header style={{ height: 45, borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Story />
      </header>
    ),
  ],
  parameters: { route: '/home', layout: 'fullscreen' },
} satisfies Meta<typeof AppHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
