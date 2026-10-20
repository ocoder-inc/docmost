import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyState } from '@source/apps/client/src/components/ui/empty-state';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
