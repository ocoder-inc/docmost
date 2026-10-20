import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResultPreview } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/result-preview';

// The generated text above the AI menu's input, in the 600px menu.
const meta = {
  title: 'Components/ResultPreview',
  component: ResultPreview,
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    output:
      'When an alert fires, the on-call engineer **acknowledges it within five minutes** and opens a dedicated incident channel.',
    isLoading: false,
  },
} satisfies Meta<typeof ResultPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Still generating. */
export const Generating: Story = {
  args: { output: 'When an alert fires, the on-call engineer', isLoading: true },
};
