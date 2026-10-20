import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';
import { IconAlertTriangle, IconFiles } from '@tabler/icons-react';

import { EmptyState } from '@source/apps/client/src/components/ui/empty-state';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

// The home page's recent changes before any page exists.
export const Default: Story = {
  args: {
    icon: IconFiles,
    title: 'No pages yet',
    description: 'Pages you create will show up here.',
  },
};

// The AI chat page after a chat failed to load.
export const WithAction: Story = {
  args: {
    icon: IconAlertTriangle,
    title: 'Failed to load chat. An error occurred.',
    action: (
      <Button variant="default" size="sm" mt="xs">
        Try again
      </Button>
    ),
  },
};
