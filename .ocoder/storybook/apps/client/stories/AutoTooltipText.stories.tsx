import type { Meta, StoryObj } from '@storybook/react-vite';

import { AutoTooltipText } from '@source/apps/client/src/components/ui/auto-tooltip-text';

// Text that truncates to its container and shows the full text in a tooltip, as page titles in narrow lists do.
const meta = {
  title: 'Components/AutoTooltipText',
  component: AutoTooltipText,
  decorators: [
    (Story) => (
      <div style={{ width: 220 }}>
        <Story />
      </div>
    ),
  ],
  args: { children: 'Engineering onboarding guide for new backend hires', size: 'sm', fw: 500 },
} satisfies Meta<typeof AutoTooltipText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Short: Story = {
  args: { children: 'Q4 roadmap' },
};
