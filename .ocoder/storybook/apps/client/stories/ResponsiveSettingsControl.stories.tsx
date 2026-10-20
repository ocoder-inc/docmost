import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResponsiveSettingsControl } from '@source/apps/client/src/components/ui/responsive-settings-row';

const meta = {
  title: 'Components/ResponsiveSettingsControl',
  component: ResponsiveSettingsControl,
} satisfies Meta<typeof ResponsiveSettingsControl>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Wrappers render what they are given; this shows the wrapper's own layout around it.
  args: { children: 'Example content' },
};
