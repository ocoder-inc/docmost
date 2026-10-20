import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChat from '@source/apps/client/src/ee/ai-chat/pages/ai-chat';

const meta = {
  title: 'Components/AiChat',
  component: AiChat,
} satisfies Meta<typeof AiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
