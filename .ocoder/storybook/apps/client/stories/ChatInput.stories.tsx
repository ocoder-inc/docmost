import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ChatInput from '@source/apps/client/src/ee/ai-chat/components/chat-input';
import { inBox } from '../fixtures/decorators';
import { pages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatInput',
  component: ChatInput,
  args: { isStreaming: false, onSend: fn(), onStop: fn(), autofocus: false },
} satisfies Meta<typeof ChatInput>;
export default meta;
type Story = StoryObj<typeof meta>;

// Below a conversation on the AI chat page.
export const Default: Story = {
  decorators: [inBox({ maxWidth: 860 })],
  args: { placeholder: 'Ask anything... Use @ to mention pages' },
};

// While the assistant is answering, the send button becomes a stop button.
export const Streaming: Story = {
  decorators: [inBox({ maxWidth: 860 })],
  args: { isStreaming: true },
};

// The page aside's chat panel, with the open page attached as context.
export const InAside: Story = {
  decorators: [inBox({ width: 318 })],
  args: {
    placeholder: 'Ask anything...',
    variant: 'flat',
    contextPages: [{ id: pages[0].id, title: pages[0].title, slugId: pages[0].slugId }],
    onRemoveContextPage: fn(),
  },
};
