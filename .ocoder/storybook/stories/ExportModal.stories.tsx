import type { Meta, StoryObj } from '@storybook/react-vite';
import { MantineThemeProvider } from '@mantine/core';
import { fn } from 'storybook/test';

import ExportModal from '@source/apps/client/src/components/common/export-modal';

// Render the modal inside the story root rather than a portal on <body>, over a page-sized area
// (its overlay and content are fixed-position, so they give the root no size of their own).
const inline = { components: { ModalRoot: { defaultProps: { withinPortal: false } } } };

const meta = {
  title: 'Components/ExportModal',
  component: ExportModal,
  decorators: [
    (Story) => (
      <MantineThemeProvider theme={inline}>
        <div style={{ minHeight: 560 }}>
          <Story />
        </div>
      </MantineThemeProvider>
    ),
  ],
  args: { id: '019a2f3c-7d41-7b2e-9c1a-5e8f0d6b4a21', type: 'page', open: true, onClose: fn() },
} satisfies Meta<typeof ExportModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from a page's menu in the space tree.
export const Default: Story = {};

// Opened from a space's settings.
export const Space: Story = {
  args: { type: 'space' },
};
