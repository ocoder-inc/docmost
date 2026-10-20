import type { Meta, StoryObj } from '@storybook/react-vite';

import RestrictApiToAdmins from '@source/apps/client/src/ee/api-key/components/restrict-api-to-admins';
import { workspaceAtom } from '@source/apps/client/src/features/user/atoms/current-user-atom';
import { withAtoms } from '../fixtures/decorators';
import { sampleWorkspace } from '../fixtures/data';

const meta = {
  title: 'Components/RestrictApiToAdmins',
  component: RestrictApiToAdmins,
  // A row of the API management settings page, in its 900px container.
  decorators: [(Story) => <div style={{ maxWidth: 868 }}><Story /></div>],
} satisfies Meta<typeof RestrictApiToAdmins>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Restricted: Story = {
  decorators: [
    withAtoms([
      [workspaceAtom, { ...sampleWorkspace, settings: { ...sampleWorkspace.settings, api: { restrictToAdmins: true } } }],
    ]),
  ],
};
