import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatReadOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-read-only';

const meta = {
  title: 'Components/AiChatReadOnly',
  component: AiChatReadOnly,
} satisfies Meta<typeof AiChatReadOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
