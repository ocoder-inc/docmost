import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Text } from '@mantine/core';

import { PageListIcon } from '@source/apps/client/src/components/common/page-list-icon';

// The icon at the start of a row in the home page's page lists.
const meta = {
  title: 'Components/PageListIcon',
  component: PageListIcon,
  decorators: [
    // As in a row of the "Recently updated" list: the icon, then the page title.
    (Story) => (
      <Group wrap="nowrap">
        <Story />
        <Text fw={500} size="md" lineClamp={1}>
          API design guidelines
        </Text>
      </Group>
    ),
  ],
} satisfies Meta<typeof PageListIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** A page without an emoji. */
export const Default: Story = {};

export const Emoji: Story = {
  args: { icon: '📐' },
};

export const Base: Story = {
  args: { isBase: true },
};
