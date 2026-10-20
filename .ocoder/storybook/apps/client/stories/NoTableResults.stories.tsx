import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@mantine/core';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';

const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
  // A table row: the app renders it as the body of an empty members or API keys table.
  decorators: [
    (Story) => (
      <Table.ScrollContainer minWidth={500}>
        <Table highlightOnHover verticalSpacing="sm">
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
      </Table.ScrollContainer>
    ),
  ],
} satisfies Meta<typeof NoTableResults>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { colSpan: 3 },
};
