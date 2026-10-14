import type { Meta, StoryObj } from '@storybook/react-vite';
import { MantineThemeProvider } from '@mantine/core';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  args: { open: true, onClose: () => {} },
  decorators: [
    // Render the modal in the story root instead of a portal on <body>, so the capture sees it.
    (Story) => (
      <MantineThemeProvider theme={{ components: { ModalRoot: { defaultProps: { withinPortal: false } } } }}>
        <div style={{ minHeight: 560 }}>
          <Story />
        </div>
      </MantineThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: 'pg_1', type: 'page' },
};

export const Space: Story = {
  args: { id: 'sp_eng', type: 'space' },
};
