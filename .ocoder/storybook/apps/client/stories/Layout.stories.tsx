import type { Meta, StoryObj } from '@storybook/react-vite';
import { Route, Routes } from 'react-router-dom';

import Layout from '@source/apps/client/src/components/layouts/global/layout';
import Home from '@source/apps/client/src/pages/dashboard/home';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  // The signed-in app's layout route; it fills the window and renders the page at the URL.
  parameters: { layout: 'fullscreen', route: '/home' },
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
