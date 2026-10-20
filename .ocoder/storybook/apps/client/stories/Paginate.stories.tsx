import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Paginate from '@source/apps/client/src/components/common/paginate';

const meta = {
  title: 'Components/Paginate',
  component: Paginate,
  args: { onPrev: fn(), onNext: fn() },
} satisfies Meta<typeof Paginate>;
export default meta;
type Story = StoryObj<typeof meta>;

// The first page of a longer list: only "Next" is enabled.
export const Default: Story = {
  args: { hasPrevPage: false, hasNextPage: true },
};

export const MiddlePage: Story = {
  args: { hasPrevPage: true, hasNextPage: true },
};
