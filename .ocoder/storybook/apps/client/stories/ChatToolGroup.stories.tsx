import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolGroup from '@source/apps/client/src/ee/ai-chat/components/chat-tool-group';

const meta = {
  title: 'Components/ChatToolGroup',
  component: ChatToolGroup,
} satisfies Meta<typeof ChatToolGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
