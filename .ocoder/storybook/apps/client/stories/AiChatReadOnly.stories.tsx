import type { Meta, StoryObj } from '@storybook/react-vite';

import AiChatReadOnly from '@source/apps/client/src/ee/ai-chat/components/ai-chat-read-only';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { inBox, withAtoms } from '../fixtures/decorators';
import { entitlements } from '../fixtures/data';

const meta = {
  title: 'Components/AiChatReadOnly',
  component: AiChatReadOnly,
  // A row of the AI settings page, in the settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof AiChatReadOnly>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Without the enterprise AI controls, the switch is disabled and an "Enterprise" badge shows.
export const NotEntitled: Story = {
  decorators: [withAtoms([[entitlementAtom, { ...entitlements, tier: 'business', features: ['ai'] }]])],
};
