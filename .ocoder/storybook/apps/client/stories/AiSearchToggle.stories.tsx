import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchToggle } from '@source/apps/client/src/ee/ai/components/enable-ai-search';
import { sampleCurrentUser, withApp } from '../fixtures/story-kit';

const meta = {
  title: 'Components/AiSearchToggle',
  component: AiSearchToggle,
} satisfies Meta<typeof AiSearchToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

// The switch on Settings > AI, on for a workspace with AI search enabled.
export const Default: Story = {
  args: {},
  decorators: [withApp()],
};

// With a label and smaller size, and AI search turned off for the workspace.
export const LabelledOff: Story = {
  args: { size: 'sm', label: 'AI search' },
  decorators: [
    withApp({
      currentUser: {
        ...sampleCurrentUser,
        workspace: {
          ...sampleCurrentUser.workspace,
          settings: { ai: { search: false, generative: true } },
        } as never,
      },
    }),
  ],
};

// Without a paid licence the switch is disabled (hover shows the upgrade hint).
export const Unlicensed: Story = {
  args: {},
  decorators: [withApp({ entitlements: { cloud: false, tier: 'free', features: [] } as never })],
};
