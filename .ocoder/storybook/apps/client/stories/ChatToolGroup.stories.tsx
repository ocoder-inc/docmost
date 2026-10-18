import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolGroup from '@source/apps/client/src/ee/ai-chat/components/chat-tool-group';
import { searchToolCalls, streamingToolCalls } from '../fixtures/aichat2-messages';

const meta = {
  title: 'Components/ChatToolGroup',
  component: ChatToolGroup,
  // Shown at the top of an assistant message in the 350px AI chat panel.
  decorators: [
    (Story) => (
      <div style={{ width: 310 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatToolGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

// The collapsed "Steps N" header above a finished assistant reply.
export const Default: Story = {
  args: { toolCalls: searchToolCalls },
};

// While streaming: the running tool's label with a spinner.
export const Streaming: Story = {
  args: { toolCalls: streamingToolCalls, isStreaming: true },
};
