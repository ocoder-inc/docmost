import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableAiSearch from '@source/apps/client/src/ee/ai/components/enable-ai-search';

const meta = {
  title: 'Components/EnableAiSearch',
  component: EnableAiSearch,
} satisfies Meta<typeof EnableAiSearch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
