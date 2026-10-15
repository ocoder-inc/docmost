import type { Meta, StoryObj } from '@storybook/react-vite';

import Paginate from '@source/apps/client/src/components/common/paginate';

const meta = {
  title: 'Components/Paginate',
  component: Paginate,
} satisfies Meta<typeof Paginate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { hasPrevPage: false, hasNextPage: true, onPrev: () => {}, onNext: () => {} } };
