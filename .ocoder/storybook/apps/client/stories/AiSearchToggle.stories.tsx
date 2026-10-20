import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchToggle } from '@source/apps/client/src/ee/ai/components/enable-ai-search';

// The switch on the right of the "AI-powered search" settings row; on with the sample workspace.
const meta = {
  title: 'Components/AiSearchToggle',
  component: AiSearchToggle,
} satisfies Meta<typeof AiSearchToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** With a label beside it, the way the size and label props allow. */
export const WithLabel: Story = {
  args: { size: 'sm', label: 'Ask AI' },
};
