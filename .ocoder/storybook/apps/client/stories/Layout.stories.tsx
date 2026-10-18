import type { Meta, StoryObj } from '@storybook/react-vite';
import { Routes, Route } from 'react-router-dom';
import { Container, Text, Title } from '@mantine/core';

import Layout from '@source/apps/client/src/components/layouts/global/layout';
import { withApp } from '../fixtures/story-kit';
import { shellQueries } from '../fixtures/layout-kit';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: { route: '/home', layout: 'fullscreen' },
} satisfies Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof meta>;

// The route element of every signed-in page (App.tsx); here at /home with a stand-in for the home page.
export const Default: Story = {
  decorators: [withApp({ queries: shellQueries })],
  render: () => (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/home"
          element={
            <Container size={900} pt="xl">
              <Title order={2}>Welcome back, Jane</Title>
              <Text c="dimmed" mt="xs">
                Pick up where you left off in Engineering, Product and Design.
              </Text>
            </Container>
          }
        />
      </Route>
    </Routes>
  ),
};
