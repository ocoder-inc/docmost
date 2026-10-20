import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '@mantine/core';
import { IconFileExport } from '@tabler/icons-react';

import ExportModal from '@source/apps/client/src/components/common/export-modal';
import { pages, spaces } from '../fixtures/data';

// Opened from a page's or a space's menu.
const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  decorators: [
    // Opened from the page's menu.
    (Story) => (
      <>
        <Button variant="default" leftSection={<IconFileExport size={16} />}>
          Export
        </Button>
        <Story />
      </>
    ),
  ],
  args: { id: pages[0].id, type: 'page', open: true, onClose: fn() },
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Space: Story = {
  args: { id: spaces[0].id, type: 'space' },
};
