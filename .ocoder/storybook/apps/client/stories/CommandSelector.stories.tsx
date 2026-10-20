import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from '@mantine/core';
import { fn } from 'storybook/test';

import { CommandSelector } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-selector';
import { commandItems } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-items';

const meta = {
  title: 'Components/CommandSelector',
  component: CommandSelector,
  // The commands under the editor AI menu's prompt input, which is up to 600px wide.
  decorators: [(Story) => <div style={{ width: 600 }}><Story /></div>],
  args: {
    selectedIndex: -1,
    isLoading: false,
    output: '',
    handleCommand: fn(),
    children: <TextInput placeholder="Ask AI..." />,
  },
} satisfies Meta<typeof CommandSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { currentItems: commandItems.main },
};

// After a generation: what to do with the result.
export const ResultActions: Story = {
  args: { currentItems: commandItems.result, selectedIndex: 0, output: 'Merge to `main`, then promote to staging.' },
};

export const ChangeTone: Story = {
  args: { currentItems: commandItems.tone, selectedIndex: 1 },
};
