import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

// Stable across renders: the component re-runs its effect when onSearch changes.
const onSearch = () => {};

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

// As above the workspace members and group tables.
export const Default: Story = {
  args: { onSearch },
};

export const WithPlaceholder: Story = {
  args: { onSearch, placeholder: 'Search members...' },
};
