import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from '@mantine/core';

import { CommandSelector } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-selector';
import { commandItems } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-items';
import classes from '@source/apps/client/src/ee/ai/components/editor/ai-menu/ai-menu.module.css';

// The editor's "Ask AI" menu wraps its prompt input in the command selector; the input is the
// menu's target and the commands open below it.
const promptInput = <TextInput className={classes.aiInput} placeholder="Ask AI..." />;

const meta = {
  title: 'Components/CommandSelector',
  component: CommandSelector,
  // The AI menu is up to 600px wide, under the selected text in the editor.
  decorators: [
    (Story) => (
      <div style={{ width: 600, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CommandSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

// The AI menu just opened on a text selection: the main commands, nothing highlighted yet.
export const Default: Story = {
  args: {
    selectedIndex: -1,
    isLoading: false,
    output: '',
    currentItems: commandItems.main,
    handleCommand: () => {},
    children: promptInput,
  },
};

// After "Translate": the language sub-menu with "Back" highlighted.
export const Translate: Story = {
  args: { ...Default.args, selectedIndex: 0, currentItems: commandItems.translate },
};

// After a generation finished: what to do with the result.
export const Result: Story = {
  args: {
    ...Default.args,
    selectedIndex: 0,
    output: 'Our on-call rotation changes every Monday at 10:00 UTC.',
    currentItems: commandItems.result,
  },
};
