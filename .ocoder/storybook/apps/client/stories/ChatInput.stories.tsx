import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ChatInput from '@source/apps/client/src/ee/ai-chat/components/chat-input';
import { pages } from '../fixtures/data';

// The input under the /ai conversation, at the width of its centred column.
const meta = {
  title: 'Components/ChatInput',
  component: ChatInput,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 760 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    isStreaming: false,
    onSend: fn(),
    onStop: fn(),
    placeholder: 'Ask anything... Use @ to mention pages',
    autofocus: false,
  },
} satisfies Meta<typeof ChatInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** In a page's aside: flat, with the open page attached as context. */
export const WithContextPage: Story = {
  args: {
    variant: 'flat',
    placeholder: 'Ask anything...',
    contextPages: [{ id: pages[0].id, title: pages[0].title, slugId: pages[0].slugId }],
    onRemoveContextPage: fn(),
  },
};

export const Streaming: Story = {
  args: { isStreaming: true },
};
