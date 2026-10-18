import type { Meta, StoryObj } from '@storybook/react-vite';

import { Error404 } from '@source/apps/client/src/components/ui/error-404';

const meta = {
  title: 'Components/Error404',
  component: Error404,
} satisfies Meta<typeof Error404>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app's not-found page: the catch-all route and unknown shares, pages and workspaces.
export const Default: Story = {};
