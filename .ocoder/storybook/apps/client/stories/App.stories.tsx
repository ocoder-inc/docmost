import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@source/apps/client/src/App';

// The whole app: its routes inside the stories' router, signed in, at the home page. It fills the page.
const meta = {
  title: 'Components/App',
  component: App,
  parameters: { route: '/home' },
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
