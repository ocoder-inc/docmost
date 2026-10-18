import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResultPreview } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/result-preview';

const meta = {
  title: 'Components/ResultPreview',
  component: ResultPreview,
  // Shown above the prompt input in the editor's AI menu, up to 600px wide.
  decorators: [
    (Story) => (
      <div style={{ width: 600, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResultPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

// The generated text after "Improve writing" finished.
export const Default: Story = {
  args: {
    output:
      'Our **on-call rotation** changes every Monday at 10:00 UTC. Each engineer covers one week, ' +
      'and the secondary on-call handles escalations after 15 minutes.\n\n' +
      '- Hand-offs happen in `#oncall`.\n- Severity levels are defined in the incident response guide.',
    isLoading: false,
  },
};

// While the answer streams in: partial text and a loader.
export const Streaming: Story = {
  args: { output: 'Our **on-call rotation** changes every Monday at', isLoading: true },
};
