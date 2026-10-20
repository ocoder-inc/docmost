import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@source/apps/client/src/App';

const meta = {
  title: 'Components/App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
