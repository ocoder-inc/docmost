import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableAiChat from '@source/apps/client/src/ee/ai-chat/components/enable-ai-chat';

const meta = {
  title: 'Components/EnableAiChat',
  component: EnableAiChat,
} satisfies Meta<typeof EnableAiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
