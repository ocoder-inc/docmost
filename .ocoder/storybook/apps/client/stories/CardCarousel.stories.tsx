import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, Text, rem } from '@mantine/core';

import CardCarousel from '@source/apps/client/src/components/ui/card-carousel';
import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';
import { AvatarIconType } from '@source/apps/client/src/features/attachments/types/attachment.types';
import { inBox } from '../fixtures/decorators';
import { spaces } from '../fixtures/data';

const moreSpaces = [
  ...spaces,
  { ...spaces[0], id: 'design', name: 'Design', memberCount: 6 },
  { ...spaces[0], id: 'support', name: 'Customer Support', memberCount: 9 },
];

const meta = {
  title: 'Components/CardCarousel',
  component: CardCarousel,
  // The home page's 900px column, holding more space cards than fit: the right arrow shows.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof CardCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'Spaces you belong to',
    children: moreSpaces.map((space) => (
      <Card key={space.id} p="xs" radius="md" withBorder style={{ width: 220 }}>
        <Card.Section h={40} style={{ background: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))' }} />
        <CustomAvatar
          name={space.name}
          type={AvatarIconType.SPACE_ICON}
          color="initials"
          variant="filled"
          size="md"
          mt={rem(-20)}
        />
        <Text fz="md" fw={500} mt="xs">
          {space.name}
        </Text>
        <Text c="dimmed" size="xs" fw={700} mt="md">
          {space.memberCount} members
        </Text>
      </Card>
    )),
  },
};
