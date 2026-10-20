import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableAiChat from '@source/apps/client/src/ee/ai-chat/components/enable-ai-chat';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { inBox, withAtoms } from '../fixtures/decorators';
import { entitlements } from '../fixtures/data';

const meta = {
  title: 'Components/EnableAiChat',
  component: EnableAiChat,
  // A row of the AI settings page, in the settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof EnableAiChat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Without an AI entitlement the switch is disabled, with the upgrade label as its tooltip.
export const NotEntitled: Story = {
  decorators: [withAtoms([[entitlementAtom, { ...entitlements, tier: 'standard', features: [] }]])],
};
