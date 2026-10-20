import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ChatEmptyState from '@source/apps/client/src/ee/ai-chat/components/chat-empty-state';

const meta = {
  title: 'Components/ChatEmptyState',
  component: ChatEmptyState,
  args: { isStreaming: false, onSend: fn(), onStop: fn() },
} satisfies Meta<typeof ChatEmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
