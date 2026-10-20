import type { Meta, StoryObj } from '@storybook/react-vite';

import Aside from '@source/apps/client/src/components/layouts/global/aside';
import { asideStateAtom } from '@source/apps/client/src/components/layouts/global/hooks/atoms/sidebar-atom';
import { withAtoms, withRoutePath } from '../.storybook/providers';
import { pages } from '../fixtures/data';

// The page's 350px aside, open on the tab the header's "AI Chat" link opens.
const meta = {
  title: 'Components/Aside',
  component: Aside,
  decorators: [
    (Story) => (
      <div style={{ width: 350, height: 700 }}>
        <Story />
      </div>
    ),
    withRoutePath('/s/:spaceSlug/p/:pageSlug'),
  ],
  parameters: { route: `/s/engineering/p/onboarding-guide-${pages[0].slugId}` },
} satisfies Meta<typeof Aside>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withAtoms([[asideStateAtom, { tab: 'chat', isAsideOpen: true }]])],
};
