import type { Meta, StoryObj } from '@storybook/react-vite';

import AiSettings from '@source/apps/client/src/ee/ai/pages/ai-settings';

const meta = {
  title: 'Components/AiSettings',
  component: AiSettings,
} satisfies Meta<typeof AiSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
