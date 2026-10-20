import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ExportModal from '@source/apps/client/src/components/common/export-modal';
import { modalsInline } from '../fixtures/decorators';
import { pages, spaces } from '../fixtures/data';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  decorators: [modalsInline],
  args: { open: true, onClose: fn() },
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from a page's menu.
export const Default: Story = {
  args: { id: pages[0].id, type: 'page' },
};

// Opened from a space's settings.
export const Space: Story = {
  args: { id: spaces[0].id, type: 'space' },
};
