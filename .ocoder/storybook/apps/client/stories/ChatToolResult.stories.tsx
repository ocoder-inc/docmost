import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolResult from '@source/apps/client/src/ee/ai-chat/components/chat-tool-result';
import { searchToolCalls } from '../fixtures/aichat2-messages';

const meta = {
  title: 'Components/ChatToolResult',
  component: ChatToolResult,
  // One step in an expanded tool group, inside the 350px AI chat panel.
  decorators: [
    (Story) => (
      <div style={{ width: 310 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatToolResult>;
export default meta;
type Story = StoryObj<typeof meta>;

// A "Searched pages" step listed when the user expands an assistant reply's steps.
export const Default: Story = {
  args: { toolCall: searchToolCalls[0] },
};

// A step for a tool without a friendly label shows the tool name.
export const UnknownTool: Story = {
  args: { toolCall: { id: 'call_09', name: 'list_comments', args: { pageId: 'pg-oncall' }, result: [] } },
};
