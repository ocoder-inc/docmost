import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Text } from '@mantine/core';

import { PageListIcon } from '@source/apps/client/src/components/common/page-list-icon';

const meta = {
  title: 'Components/PageListIcon',
  component: PageListIcon,
  // Before a page's title in the home page's recent changes and other page lists.
  decorators: [
    (Story) => (
      <Group wrap="nowrap">
        <Story />
        <Text fw={500} size="md" lineClamp={1}>
          Deployment runbook
        </Text>
      </Group>
    ),
  ],
} satisfies Meta<typeof PageListIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// A page without an emoji shows the document icon.
export const Default: Story = {
  args: { icon: null, isBase: false },
};

export const Emoji: Story = {
  args: { icon: '🚀' },
};

export const Base: Story = {
  args: { icon: null, isBase: true },
};
