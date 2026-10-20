import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResultPreview } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/result-preview';

const meta = {
  title: 'Components/ResultPreview',
  component: ResultPreview,
  // The generated text above the editor AI menu's prompt input, up to 600px wide.
  decorators: [(Story) => <div style={{ width: 600 }}><Story /></div>],
} satisfies Meta<typeof ResultPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    output:
      'To ship a release, **merge to `main`** and wait for CI. Then:\n\n1. Promote the build to staging.\n2. Run the smoke tests.\n3. Roll out to production behind a 10% canary.',
  },
};

export const Generating: Story = {
  args: { isLoading: true, output: 'To ship a release, **merge to `main`** and' },
};
