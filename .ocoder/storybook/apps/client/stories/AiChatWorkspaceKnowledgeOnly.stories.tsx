import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatWorkspaceKnowledgeOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-workspace-knowledge-only';

const meta = {
  title: 'Components/AiChatWorkspaceKnowledgeOnly',
  component: AiChatWorkspaceKnowledgeOnly,
} satisfies Meta<typeof AiChatWorkspaceKnowledgeOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
