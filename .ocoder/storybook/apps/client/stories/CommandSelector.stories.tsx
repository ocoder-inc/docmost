import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TextInput } from '@mantine/core';

import { CommandSelector } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-selector';
import { commandItems } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/command-items';

// The command list under the "Ask AI..." input of the editor's AI menu.
const meta = {
  title: 'Components/CommandSelector',
  component: CommandSelector,
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 380 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    selectedIndex: 0,
    isLoading: false,
    output: '',
    currentItems: commandItems.main,
    handleCommand: fn(),
    children: <TextInput placeholder="Ask AI..." />,
  },
} satisfies Meta<typeof CommandSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The "Change tone" submenu. */
export const Tone: Story = {
  args: { currentItems: commandItems.tone },
};
