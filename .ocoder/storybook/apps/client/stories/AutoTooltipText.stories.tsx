import type { Meta, StoryObj } from '@storybook/react-vite';

import { AutoTooltipText } from '@source/apps/client/src/components/ui/auto-tooltip-text';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/AutoTooltipText',
  component: AutoTooltipText,
  // A narrow table cell: long text is cut off and shows the rest in a tooltip on hover.
  decorators: [inBox({ width: 220 })],
} satisfies Meta<typeof AutoTooltipText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Customer feedback tracker — October interviews', size: 'sm', fw: 500 },
};

export const Short: Story = {
  args: { children: 'Launch checklist', size: 'sm', fw: 500 },
};
