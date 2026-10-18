import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, rem, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import CardCarousel from '@source/apps/client/src/components/ui/card-carousel';
import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';
import classes from '@source/apps/client/src/features/space/components/space-carousel.module.css';

const spaces = [
  { slug: 'engineering', name: 'Engineering', memberCount: 18 },
  { slug: 'design', name: 'Design', memberCount: 7 },
  { slug: 'product', name: 'Product', memberCount: 9 },
  { slug: 'operations', name: 'Operations', memberCount: 5 },
  { slug: 'marketing', name: 'Marketing', memberCount: 6 },
  { slug: 'handbook', name: 'Company Handbook', memberCount: 24 },
];

/** A space card as the home page's "Spaces you belong to" carousel renders it. */
function SpaceCard({ slug, name, memberCount }: (typeof spaces)[number]) {
  return (
    <Card p="xs" radius="md" component={Link} to={`/s/${slug}`} className={classes.card} withBorder>
      <Card.Section className={classes.cardSection} h={40} />
      <CustomAvatar name={name} color="initials" variant="filled" size="md" mt={rem(-20)} />
      <Text fz="md" fw={500} mt="xs" className={classes.title}>
        {name}
      </Text>
      <Text c="dimmed" size="xs" fw={700} mt="md">
        {memberCount === 1 ? '1 member' : `${memberCount} members`}
      </Text>
    </Card>
  );
}

const meta = {
  title: 'Components/CardCarousel',
  component: CardCarousel,
  // The home page's 900px container.
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900, padding: '24px 32px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

// "Spaces you belong to" on the home page: more space cards than fit, scrolling sideways.
export const Default: Story = {
  args: {
    ariaLabel: 'Spaces you belong to',
    children: spaces.map((space) => <SpaceCard key={space.slug} {...space} />),
  },
};

// Few spaces: every card fits, so neither scroll arrow is enabled.
export const FewCards: Story = {
  args: {
    ariaLabel: 'Spaces you belong to',
    children: spaces.slice(0, 2).map((space) => <SpaceCard key={space.slug} {...space} />),
  },
};
