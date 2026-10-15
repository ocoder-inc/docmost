import type { Meta, StoryObj } from '@storybook/react-vite';

import ExportModal from '@source/apps/client/src/components/common/export-modal';
import { Button } from '@mantine/core';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: 'sample-page', type: 'page', open: true, onClose: () => {} },
  render: (args) => <><Button>Export page</Button><ExportModal {...args} /></>,
};
