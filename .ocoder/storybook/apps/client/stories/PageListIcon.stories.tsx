import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Text } from '@mantine/core';

import { PageListIcon } from '@source/apps/client/src/components/common/page-list-icon';

const meta = {
  title: 'Components/PageListIcon',
  component: PageListIcon,
} satisfies Meta<typeof PageListIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { icon: null, isBase: false },
};

// An emoji icon renders as bare text; shown beside a page title as in the recent changes list.
export const WithEmoji: Story = {
  args: { icon: '🚀' },
  decorators: [
    (Story) => (
      <Group wrap="nowrap">
        <Story />
        <Text fw={500}>Onboarding checklist</Text>
      </Group>
    ),
  ],
};

export const Base: Story = {
  args: { isBase: true },
};
