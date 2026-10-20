import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Paginate from '@source/apps/client/src/components/common/paginate';

// Under a settings table, aligned to its right edge.
const meta = {
  title: 'Components/Paginate',
  component: Paginate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
  args: { hasPrevPage: true, hasNextPage: true, onPrev: fn(), onNext: fn() },
} satisfies Meta<typeof Paginate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstPage: Story = {
  args: { hasPrevPage: false },
};
