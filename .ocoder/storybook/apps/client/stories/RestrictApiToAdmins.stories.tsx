import type { Meta, StoryObj } from '@storybook/react-vite';

import RestrictApiToAdmins from '@source/apps/client/src/ee/api-key/components/restrict-api-to-admins';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import { inBox, withAtoms } from '../fixtures/decorators';
import { entitlements } from '../fixtures/data';

const meta = {
  title: 'Components/RestrictApiToAdmins',
  component: RestrictApiToAdmins,
  // A row of the workspace API keys page, in the settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof RestrictApiToAdmins>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Without the API keys entitlement the switch is disabled.
export const NotEntitled: Story = {
  decorators: [withAtoms([[entitlementAtom, { ...entitlements, tier: 'standard', features: [] }]])],
};
