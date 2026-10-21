import type { Meta, StoryObj } from '@storybook/react-vite';
import { MantineThemeProvider } from '@mantine/core';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  decorators: [
    // Render the modal in place rather than in a portal on <body>, so it sits inside the story root,
    // over a page-sized element standing in for the page it opens from (its own root has no box).
    (Story) => (
      <MantineThemeProvider theme={{ components: { ModalRoot: { defaultProps: { withinPortal: false } } } }}>
        <div style={{ minHeight: '100vh' }}>
          <Story />
        </div>
      </MantineThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// As opened from the page header menu.
export const Default: Story = {
  args: { id: '01965f3a-7c2e-7d41-9b8e-3f2a1c0d9e47', type: 'page', open: true, onClose: () => {} },
};

// As opened from the space details settings.
export const Space: Story = {
  args: { id: '01965f2b-4a10-7e3c-8d55-6b7c9e2f1a03', type: 'space', open: true, onClose: () => {} },
};
