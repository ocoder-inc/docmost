import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResultPreview } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/result-preview';

const meta = {
  title: 'Components/ResultPreview',
  component: ResultPreview,
} satisfies Meta<typeof ResultPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
