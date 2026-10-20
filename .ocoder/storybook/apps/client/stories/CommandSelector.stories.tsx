import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TextInput } from '@mantine/core';

import { CommandSelector } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-selector';
import { commandItems } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-items';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/CommandSelector',
  component: CommandSelector,
  // The editor AI menu: up to 600px wide, its prompt input as the menu's target.
  decorators: [inBox({ maxWidth: 600 })],
  args: {
    selectedIndex: -1,
    isLoading: false,
    output: '',
    handleCommand: fn(),
    children: <TextInput placeholder="Ask AI..." aria-label="Ask AI" />,
  },
} satisfies Meta<typeof CommandSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

// The main actions, offered for the selected text.
export const Default: Story = {
  args: { currentItems: commandItems.main },
};

// After an answer is generated: what to do with it.
export const Result: Story = {
  args: { currentItems: commandItems.result, output: 'A shorter version of the paragraph.', selectedIndex: 0 },
};
