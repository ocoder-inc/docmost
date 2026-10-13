import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Text } from '@mantine/core';

import { PageListIcon } from '@source/apps/client/src/components/common/page-list-icon';

const meta = {
  title: 'Components/PageListIcon',
  component: PageListIcon,
  // Shown before a page title in page lists, as in Recent changes.
  decorators: [
    (Story, { args }) => (
      <Group wrap="nowrap">
        <Story />
        <Text fw={500} size="md">
          {args.isBase ? 'Launch Tracker' : 'Q3 Product Roadmap'}
        </Text>
      </Group>
    ),
  ],
} satisfies Meta<typeof PageListIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// A page without an emoji icon.
export const Default: Story = {
  args: { icon: null, isBase: false },
};

export const Emoji: Story = {
  args: { icon: '🗺️' },
};

export const Base: Story = {
  args: { icon: null, isBase: true },
};
