import type { Meta, StoryObj } from '@storybook/react-vite';

import GlobalAppShell from '@source/apps/client/src/components/layouts/global/global-app-shell';

const meta = {
  title: 'Components/GlobalAppShell',
  component: GlobalAppShell,
} satisfies Meta<typeof GlobalAppShell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Wrappers render what they are given; this shows the wrapper's own layout around it.
  args: { children: 'Example content' },
};
