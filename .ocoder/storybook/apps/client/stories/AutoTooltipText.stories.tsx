import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import { AutoTooltipText } from '@source/apps/client/src/components/ui/auto-tooltip-text';
import { CustomAvatar } from '@source/apps/client/src/components/ui/custom-avatar';

const meta = {
  title: 'Components/AutoTooltipText',
  component: AutoTooltipText,
  // A row of the page-permission list: avatar, then the member's name and email in a narrow column.
  decorators: [
    (Story) => (
      <div style={{ width: 240, display: 'flex', alignItems: 'center', gap: 12, padding: 16 }}>
        <CustomAvatar name="Jane Cooper" />
        <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof AutoTooltipText>;
export default meta;
type Story = StoryObj<typeof meta>;

// The member's name in the page-permission list; it fits, so hovering shows no tooltip.
export const Default: Story = {
  args: { children: 'Jane Cooper', fz: 'sm', fw: 500 },
};

// A long email that does not fit: it is truncated, and hovering it shows the full text in a tooltip.
export const Truncated: Story = {
  args: { children: 'jane.cooper.engineering-lead@example.com', fz: 'xs', c: 'dimmed' },
  play: async ({ canvasElement }) => {
    const text = within(canvasElement).getByText('jane.cooper.engineering-lead@example.com');
    await userEvent.hover(text);
  },
};
