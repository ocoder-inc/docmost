import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, Text, Title } from '@mantine/core';

import GlobalAppShell from '@source/apps/client/src/components/layouts/global/global-app-shell';
import { withApp } from '../fixtures/story-kit';
import { shellQueries } from '../fixtures/layout-kit';

const meta = {
  title: 'Components/GlobalAppShell',
  component: GlobalAppShell,
  parameters: { route: '/home', layout: 'fullscreen' },
} satisfies Meta<typeof GlobalAppShell>;
export default meta;
type Story = StoryObj<typeof meta>;

// The signed-in app frame around the home page: header, global sidebar and the page in the main area.
export const Default: Story = {
  decorators: [withApp({ queries: shellQueries })],
  args: {
    children: (
      <Container size={900} pt="xl">
        <Title order={2}>Welcome back, Jane</Title>
        <Text c="dimmed" mt="xs">
          Pick up where you left off in Engineering, Product and Design.
        </Text>
      </Container>
    ),
  },
};
