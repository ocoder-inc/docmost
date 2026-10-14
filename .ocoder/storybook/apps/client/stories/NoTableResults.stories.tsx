import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@mantine/core';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';

const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
  decorators: [
    (Story) => (
      <Table highlightOnHover verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Created by</Table.Th>
            <Table.Th>Last used</Table.Th>
            <Table.Th>Expires</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Story />
        </Table.Tbody>
      </Table>
    ),
  ],
} satisfies Meta<typeof NoTableResults>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { colSpan: 4 },
};

export const CustomText: Story = {
  args: { colSpan: 4, text: 'No authorized apps yet.' },
};
