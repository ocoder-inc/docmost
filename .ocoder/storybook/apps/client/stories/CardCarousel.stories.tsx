import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, Text } from '@mantine/core';

import CardCarousel from '@source/apps/client/src/components/ui/card-carousel';
import { sampleSpaces } from '../fixtures/data';

const spaces = [...sampleSpaces, ...sampleSpaces].map((space, index) => ({ ...space, key: `${space.id}-${index}` }));

const meta = {
  title: 'Components/CardCarousel',
  component: CardCarousel,
  // On the home page it scrolls the "Spaces you belong to" cards inside the page container.
  decorators: [(Story) => <div style={{ maxWidth: 800 }}><Story /></div>],
} satisfies Meta<typeof CardCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'Spaces you belong to',
    children: spaces.map((space) => (
      <Card key={space.key} p="xs" radius="md" withBorder w={180}>
        <Card.Section h={40} bg="var(--mantine-color-default-hover)" />
        <Text fz="md" fw={500} mt="xs">
          {space.name}
        </Text>
        <Text c="dimmed" size="xs" mt="md">
          {space.memberCount} members
        </Text>
      </Card>
    )),
  },
};
