import type { Meta, StoryObj } from '@storybook/react-vite';
import { Route, Routes } from 'react-router-dom';

import Layout from '@source/apps/client/src/components/layouts/global/layout';
import Home from '@source/apps/client/src/pages/dashboard/home';

// The signed-in layout: it loads the user and renders the current route in the app shell. The app
// nests its pages under it; this story nests the home page, at /home. It fills the page.
const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: { route: '/home' },
  render: () => (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  ),
} satisfies Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
