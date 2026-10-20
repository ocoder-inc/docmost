import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppHeader } from '@source/apps/client/src/components/layouts/global/app-header';
import { shellBackground } from '../fixtures/decorators';

const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  // The app shell's header is 45px tall and spans the window.
  decorators: [
    (Story) => (
      <div style={{ height: 45, background: shellBackground, borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen', route: '/home' },
} satisfies Meta<typeof AppHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
