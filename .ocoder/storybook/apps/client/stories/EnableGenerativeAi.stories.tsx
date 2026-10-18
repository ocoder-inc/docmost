import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableGenerativeAi from '@source/apps/client/src/ee/ai/components/enable-generative-ai';
import { withApp } from '../fixtures/story-kit';

const meta = {
  title: 'Components/EnableGenerativeAi',
  component: EnableGenerativeAi,
  // A row on the Settings > AI page, inside the settings content column (900px).
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EnableGenerativeAi>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > AI with generative AI ("Ask AI") enabled.
export const Default: Story = {
  decorators: [withApp()],
};

// Without a paid licence the switch is disabled.
export const Unlicensed: Story = {
  decorators: [withApp({ entitlements: { cloud: false, tier: 'free', features: [] } as never })],
};
