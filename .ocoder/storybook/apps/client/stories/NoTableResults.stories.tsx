import type { Meta, StoryObj } from '@storybook/react-vite';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';
import { Table } from '@mantine/core';

const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
} satisfies Meta<typeof NoTableResults>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { colSpan: 3 },
  render: (args) => <Table><Table.Tbody><NoTableResults {...args} /></Table.Tbody></Table>,
};
