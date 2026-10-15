import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: 'Search spaces...', onSearch: () => {} } };
