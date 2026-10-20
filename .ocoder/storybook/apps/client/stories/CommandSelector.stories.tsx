import type { Meta, StoryObj } from '@storybook/react-vite';

import { CommandSelector } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-selector';

const meta = {
  title: 'Components/CommandSelector',
  component: CommandSelector,
} satisfies Meta<typeof CommandSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Wrappers render what they are given; this shows the wrapper's own layout around it.
  args: { children: 'Example content' },
};
