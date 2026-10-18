import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group } from '@mantine/core';

import { StatusBadge } from '@source/apps/client/src/components/ui/status-badge';

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
} satisfies Meta<typeof StatusBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

// A status cell in a settings table, e.g. an active item.
export const Default: Story = {
  args: { label: 'Active', variant: 'success' },
};

// Every variant side by side, as statuses appear across settings tables.
export const Variants: Story = {
  args: { label: 'Active' },
  render: () => (
    <Group gap="xs">
      <StatusBadge label="Active" variant="success" />
      <StatusBadge label="Pending" variant="warning" />
      <StatusBadge label="Failed" variant="error" />
      <StatusBadge label="Syncing" variant="info" />
      <StatusBadge label="Disabled" variant="neutral" />
    </Group>
  ),
};
