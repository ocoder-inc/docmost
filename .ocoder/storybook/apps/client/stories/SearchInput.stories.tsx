import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

// Above the workspace members table.
export const Default: Story = {
  args: { onSearch: fn() },
};

// In the page attachments modal.
export const WithPlaceholder: Story = {
  args: { placeholder: 'Search attachments...', onSearch: fn() },
};
