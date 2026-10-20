import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchToggle } from '@source/apps/client/src/ee/ai/components/enable-ai-search';

const meta = {
  title: 'Components/AiSearchToggle',
  component: AiSearchToggle,
} satisfies Meta<typeof AiSearchToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

// The switch alone, as in the AI search settings row.
export const Default: Story = {};

