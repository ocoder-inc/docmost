import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

// Stable reference: the component re-runs onSearch whenever it changes.
const onSearch = () => {};

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onSearch },
};

export const CustomPlaceholder: Story = {
  args: { onSearch, placeholder: 'Search groups...' },
};
