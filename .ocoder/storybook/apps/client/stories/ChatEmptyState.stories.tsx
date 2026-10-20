import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ChatEmptyState from '@source/apps/client/src/ee/ai-chat/components/chat-empty-state';
import { workspaceAtom } from '@source/apps/client/src/features/user/atoms/current-user-atom';
import { inBox, withAtoms } from '../fixtures/decorators';
import { workspace } from '../fixtures/data';

const meta = {
  title: 'Components/ChatEmptyState',
  component: ChatEmptyState,
  // The AI chat page's 900px column, below the 45px header.
  decorators: [inBox({ maxWidth: 900, height: 755, display: 'flex', flexDirection: 'column' })],
  args: { isStreaming: false, onSend: fn(), onStop: fn() },
} satisfies Meta<typeof ChatEmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// With AI chat set to read-only, the suggestions that write pages are left out.
export const ReadOnlyWorkspace: Story = {
  decorators: [
    withAtoms([
      [workspaceAtom, { ...workspace, settings: { ...workspace.settings, ai: { ...workspace.settings.ai, chatReadOnly: true } } }],
    ]),
  ],
};
