import type { Meta, StoryObj } from '@storybook/react-vite';
import { MantineThemeProvider } from '@mantine/core';
import { fn } from 'storybook/test';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  parameters: { layout: 'fullscreen' },
  // Render the modal in place rather than in a portal on <body>, so it sits inside the story root,
  // over a viewport-sized page as it opens in the app.
  decorators: [
    (Story) => (
      <MantineThemeProvider theme={{ components: { ModalRoot: { defaultProps: { withinPortal: false } } } }}>
        <div style={{ minHeight: '100vh' }}>
          <Story />
        </div>
      </MantineThemeProvider>
    ),
  ],
  args: { id: '019a2f6e-7c1b-7d4e-9a51-3c2b8e1f0a11', type: 'page', open: true, onClose: fn() },
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Space: Story = {
  args: { type: 'space' },
};
