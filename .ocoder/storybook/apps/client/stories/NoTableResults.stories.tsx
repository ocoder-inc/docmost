import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@mantine/core';

import NoTableResults from '@source/apps/client/src/components/common/no-table-results';

const meta = {
  title: 'Components/NoTableResults',
  component: NoTableResults,
  args: { colSpan: 4 },
  // A table row: the app renders it inside a table body when a list comes back empty.
  decorators: [
    (Story) => (
      <Table>
        <Table.Tbody>
          <Story />
        </Table.Tbody>
      </Table>
    ),
  ],
} satisfies Meta<typeof NoTableResults>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: { colSpan: 5, text: 'No authorized apps yet.' },
};
