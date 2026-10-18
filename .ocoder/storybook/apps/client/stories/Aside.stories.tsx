import type { Meta, StoryObj } from '@storybook/react-vite';

import Aside from '@source/apps/client/src/components/layouts/global/aside';
import { asideStateAtom } from '@source/apps/client/src/components/layouts/global/hooks/atoms/sidebar-atom';
import { withAtoms } from '../fixtures/layout-kit';

const meta = {
  title: 'Components/Aside',
  component: Aside,
  parameters: { route: '/s/engineering/p/onboarding-guide-a1b2c3d4e5' },
  // On a page route GlobalAppShell renders the aside as a 350px panel right of the page, below the header.
  decorators: [
    (Story) => (
      <div
        style={{
          width: 350,
          height: 755,
          borderLeft: '1px solid var(--mantine-color-default-border)',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Aside>;
export default meta;
type Story = StoryObj<typeof meta>;

// The table of contents panel, opened from the page header, for a page that has no headings yet.
export const Default: Story = {
  decorators: [withAtoms([[asideStateAtom, { tab: 'toc', isAsideOpen: true }]])],
};
