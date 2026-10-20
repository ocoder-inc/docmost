import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@source/apps/client/src/App';

const meta = {
  title: 'Components/App',
  component: App,
  // The whole app; its routes render inside the stories' router, at the signed-in home page.
  parameters: { layout: 'fullscreen', route: '/home' },
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
