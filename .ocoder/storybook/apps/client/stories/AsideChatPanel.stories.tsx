import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatPanel from '@source/apps/client/src/ee/ai-chat/components/aside-chat-panel';

const meta = {
  title: 'Components/AsideChatPanel',
  component: AsideChatPanel,
} satisfies Meta<typeof AsideChatPanel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
