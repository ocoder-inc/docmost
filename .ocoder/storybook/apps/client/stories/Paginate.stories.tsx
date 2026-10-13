import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Paginate from '@source/apps/client/src/components/common/paginate';

const meta = {
  title: 'Components/Paginate',
  component: Paginate,
} satisfies Meta<typeof Paginate>;
export default meta;
type Story = StoryObj<typeof meta>;

// First page of a long members list.
export const Default: Story = {
  args: { hasPrevPage: false, hasNextPage: true, onPrev: fn(), onNext: fn() },
};

export const MiddlePage: Story = {
  args: { hasPrevPage: true, hasNextPage: true, onPrev: fn(), onNext: fn() },
};
