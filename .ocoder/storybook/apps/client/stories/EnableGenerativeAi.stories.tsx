import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableGenerativeAi from '@source/apps/client/src/ee/ai/components/enable-generative-ai';

const meta = {
  title: 'Components/EnableGenerativeAi',
  component: EnableGenerativeAi,
} satisfies Meta<typeof EnableGenerativeAi>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
