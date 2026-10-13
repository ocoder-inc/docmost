import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

const onSearch = fn();

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  args: { onSearch },
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Search members...' },
};
