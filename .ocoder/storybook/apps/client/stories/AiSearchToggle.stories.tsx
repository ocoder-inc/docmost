import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchToggle } from '@source/apps/client/src/ee/ai/components/enable-ai-search';
import { workspaceAtom } from '@source/apps/client/src/features/user/atoms/current-user-atom';
import { withAtoms } from '../fixtures/decorators';
import { workspace } from '../fixtures/data';

const meta = {
  title: 'Components/AiSearchToggle',
  component: AiSearchToggle,
} satisfies Meta<typeof AiSearchToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

// On the AI settings page, for a workspace with AI search turned on.
export const Default: Story = {};

export const Off: Story = {
  decorators: [
    withAtoms([[workspaceAtom, { ...workspace, settings: { ...workspace.settings, ai: { ...workspace.settings.ai, search: false } } }]]),
  ],
};

export const WithLabel: Story = {
  args: { size: 'sm', label: 'AI search' },
};
