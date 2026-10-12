import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@mantine/core';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';

const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
  // Rendered as the only row of an empty table body, as in the app's member and group lists.
  decorators: [
    (Story) => (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Role</Table.Th>
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
  args: { colSpan: 3 },
};
