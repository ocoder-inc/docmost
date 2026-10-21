import type { Meta, StoryObj } from '@storybook/react-vite';

import Paginate from '@source/apps/client/src/components/common/paginate';

const meta = {
  title: 'Components/Paginate',
  component: Paginate,
} satisfies Meta<typeof Paginate>;
export default meta;
type Story = StoryObj<typeof meta>;

// First page of a members list with more to come.
export const Default: Story = {
  args: { hasPrevPage: false, hasNextPage: true, onPrev: () => {}, onNext: () => {} },
};

export const MiddlePage: Story = {
  args: { hasPrevPage: true, hasNextPage: true, onPrev: () => {}, onNext: () => {} },
};
