import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ChatInput from '@source/apps/client/src/ee/ai-chat/components/chat-input';
import { samplePages } from '../fixtures/data';

const meta = {
  title: 'Components/ChatInput',
  component: ChatInput,
  // The composer at the bottom of the chat page's 720px column.
  decorators: [(Story) => <div style={{ maxWidth: 720 }}><Story /></div>],
  args: { isStreaming: false, onSend: fn(), onStop: fn(), autofocus: false },
} satisfies Meta<typeof ChatInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Ask anything... Use @ to mention pages' },
};

// In a page's AI panel: flat, with the open page attached as context.
export const WithPageContext: Story = {
  args: {
    placeholder: 'Ask anything...',
    variant: 'flat',
    contextPages: [{ id: samplePages[2].id, title: samplePages[2].title, slugId: samplePages[2].slugId }],
    onRemoveContextPage: fn(),
  },
  decorators: [(Story) => <div style={{ width: 318 }}><Story /></div>],
};

export const Streaming: Story = {
  args: { isStreaming: true },
};
