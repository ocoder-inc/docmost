import type { Meta, StoryObj } from '@storybook/react-vite';

import { AutoTooltipText } from '@source/apps/client/src/components/ui/auto-tooltip-text';

const meta = {
  title: 'Components/AutoTooltipText',
  component: AutoTooltipText,
  // In the page permissions list it truncates a member's name and email in a narrow column.
  decorators: [(Story) => <div style={{ width: 220 }}><Story /></div>],
} satisfies Meta<typeof AutoTooltipText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Jane Cooper', fz: 'sm', fw: 500 },
};

export const Truncated: Story = {
  args: { children: 'jane.cooper.platform-engineering@acme-corporation.com', fz: 'xs', c: 'dimmed' },
};
