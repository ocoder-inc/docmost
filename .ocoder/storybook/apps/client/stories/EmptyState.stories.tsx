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

// The "Recently updated" list on the home page when the workspace has no pages.
export const Default: Story = {
  args: {
    icon: IconFiles,
    title: 'No pages yet',
    description: 'Pages you create will show up here.',
  },
};

// The page route's error boundary when loading a page fails, with a retry button.
export const WithAction: Story = {
  args: {
    icon: IconAlertTriangle,
    title: 'Failed to load page. An error occurred.',
    action: (
      <Button variant="default" size="sm" mt="xs" onClick={() => {}}>
        Try again
      </Button>
    ),
  },
};
