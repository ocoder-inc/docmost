import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@mantine/core';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';

// The row a settings table shows in its body when it has nothing to list.
const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Last used</Table.Th>
              <Table.Th>Expires</Table.Th>
              <Table.Th>Created</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Story />
          </Table.Tbody>
        </Table>
      </div>
    ),
  ],
  args: { colSpan: 5 },
} satisfies Meta<typeof NoTableResults>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: { text: 'No API keys yet' },
};
