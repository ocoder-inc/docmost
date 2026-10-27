import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { MantineThemeProvider } from '@mantine/core';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  args: { onClose: fn() },
  // Keep the modal inside the story root instead of portalling it to <body>.
  decorators: [
    (Story) => (
      <MantineThemeProvider theme={{ components: { ModalRoot: { defaultProps: { withinPortal: false } } } }}>
        <div style={{ minHeight: 480 }}>
          <Story />
        </div>
      </MantineThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: '019a1c2e-7b3f-7d21-9f0a-4c5e6d7f8a9b', type: 'page', open: true },
};

export const Space: Story = {
  args: { id: '019a1c2e-1111-7d21-9f0a-4c5e6d7f8a9b', type: 'space', open: true },
};
