import type { Meta, StoryObj } from '@storybook/react-vite';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  decorators: [(Story) => <div style={{ maxWidth: 500 }}><h2>Project plan</h2><Story /></div>],
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { id: 'example-page', type: 'page', open: true, onClose: () => {} } };
