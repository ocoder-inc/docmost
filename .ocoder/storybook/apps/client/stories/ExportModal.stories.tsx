import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';
import { fn } from 'storybook/test';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  // The modal portals to <body>; the page behind it shows the menu action that opened it.
  render: (args) => (
    <>
      <Button variant="default">Export</Button>
      <ExportModal {...args} />
    </>
  ),
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: 'pg-01-q3roadmap', type: 'page', open: true, onClose: fn() },
};

export const Space: Story = {
  args: { id: 'sp-engineering', type: 'space', open: true, onClose: fn() },
};
