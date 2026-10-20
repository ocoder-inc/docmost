import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, Text } from '@mantine/core';

import CardCarousel from '@source/apps/client/src/components/ui/card-carousel';
import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';
import { spaces } from '../fixtures/data';

// The home page's "Spaces you belong to" row: 220px space cards that scroll sideways in its 900px column.
const cards = [...spaces, ...spaces].map((space, index) => (
  <Card key={index} p="xs" radius="md" withBorder style={{ width: 220, flexShrink: 0 }}>
    <Card.Section h={40} style={{ background: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))' }} />
    <CustomAvatar
      name={space.name}
      type={AvatarIconType.SPACE_ICON}
      color="initials"
      variant="filled"
      size="md"
      mt={-20}
    />
    <Text fz="md" fw={500} mt="xs">
      {space.name}
    </Text>
    <Text c="dimmed" size="xs" fw={700} mt="md">
      {space.memberCount} members
    </Text>
  </Card>
));

const meta = {
  title: 'Components/CardCarousel',
  component: CardCarousel,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
  args: { ariaLabel: 'Spaces you belong to', children: cards },
} satisfies Meta<typeof CardCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
