import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { SearchInput } from '@source/apps/client/src/components/common/search-input';

// Above the members and groups tables in settings.
const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  args: { placeholder: 'Search members...', onSearch: fn() },
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
