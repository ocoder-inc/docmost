import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  // The modal renders in a portal; keep the menu button that opened it in the story root.
  decorators: [
    (Story) => (
      <div>
        <Button variant="default" size="xs">
          Export
        </Button>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from a page's header menu.
export const Default: Story = {
  args: { id: '01964d2a-7f3b-7c1e-9a4d-2b5e8f6c3a10', type: 'page', open: true, onClose: () => {} },
};

// Opened from the space sidebar menu.
export const Space: Story = {
  args: { id: '01964d2a-1111-7c1e-9a4d-2b5e8f6c3a10', type: 'space', open: true, onClose: () => {} },
};
