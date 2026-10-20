import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatLayout from '@source/apps/client/src/ee/ai-chat/components/ai-chat-layout';

const meta = {
  title: 'Components/AiChatLayout',
  component: AiChatLayout,
} satisfies Meta<typeof AiChatLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
