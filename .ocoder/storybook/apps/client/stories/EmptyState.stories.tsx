import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconStar } from '@tabler/icons-react';

import { EmptyState } from '@source/apps/client/src/components/ui/empty-state';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: IconStar,
    title: 'No favorite pages',
    description: 'Pages you favorite will show up here.',
  },
};
