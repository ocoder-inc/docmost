import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

// Stable: the component re-runs its effect whenever onSearch changes.
const onSearch = () => {};

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

// As above the workspace members and group lists.
export const Default: Story = {
  args: { onSearch },
};

// As in the page attachments modal.
export const WithPlaceholder: Story = {
  args: { onSearch, placeholder: 'Search attachments...' },
};
