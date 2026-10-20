import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResultPreview } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/result-preview';
import { inBox } from '../fixtures/decorators';

const output =
  'Deploys run from `main` through the CI pipeline. Each release ships behind a feature flag and reaches ' +
  '**10%** of workspaces first.\n\n- Migrations ship one release early\n- Roll back if error rates rise';

const meta = {
  title: 'Components/ResultPreview',
  component: ResultPreview,
  // Above the editor AI menu's input, up to 600px wide.
  decorators: [inBox({ maxWidth: 600 })],
} satisfies Meta<typeof ResultPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

// The generated text, once complete.
export const Default: Story = {
  args: { output, isLoading: false },
};

export const Generating: Story = {
  args: { output: 'Deploys run from `main` through the CI pipeline.', isLoading: true },
};
