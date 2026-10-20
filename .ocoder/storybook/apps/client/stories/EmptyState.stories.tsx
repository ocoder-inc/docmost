import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';
import { IconFiles, IconAlertTriangle } from '@tabler/icons-react';

import { EmptyState } from '@source/apps/client/src/components/ui/empty-state';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  args: {
    icon: IconFiles,
    title: 'No pages yet',
    description: 'Pages you create will show up here.',
  },
} satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The AI chat page's error state, with a retry button. */
export const WithAction: Story = {
  args: {
    icon: IconAlertTriangle,
    title: 'Failed to load chat. An error occurred.',
    description: undefined,
    action: (
      <Button variant="default" size="sm" mt="xs">
        Try again
      </Button>
    ),
  },
};
