import type { Meta, StoryObj } from '@storybook/react-vite';

import TopMenu from '@source/apps/client/src/components/layouts/global/top-menu';
import { withApp } from '../fixtures/story-kit';
import { personalSpaceQuery } from '../fixtures/layout-kit';

const meta = {
  title: 'Components/TopMenu',
  component: TopMenu,
  parameters: { route: '/home' },
} satisfies Meta<typeof TopMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// The workspace menu at the right end of the app header: workspace logo, name and a chevron.
export const Default: Story = {
  decorators: [withApp({ queries: [personalSpaceQuery] })],
};

// The same menu opened, showing the workspace and account entries.
export const Opened: Story = {
  decorators: [withApp({ queries: [personalSpaceQuery] })],
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    button?.click();
  },
};
