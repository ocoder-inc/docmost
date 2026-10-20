import type { Meta, StoryObj } from '@storybook/react-vite';

import { AutoTooltipText } from '@source/apps/client/src/components/ui/auto-tooltip-text';

const meta = {
  title: 'Components/AutoTooltipText',
  component: AutoTooltipText,
} satisfies Meta<typeof AutoTooltipText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Wrappers render what they are given; this shows the wrapper's own layout around it.
  args: { children: 'Example content' },
};
