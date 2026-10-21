import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@mantine/core';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';

const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
  // It is a table row: the app renders it in an empty table's body.
  decorators: [
    (Story) => (
      <Table>
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
  args: { colSpan: 4 },
} satisfies Meta<typeof NoTableResults>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: { text: 'No API keys yet' },
};
