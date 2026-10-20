import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PageChildren } from '@source/apps/client/src/components/ui/destination-picker/page-children';
import { inBox, withApi } from '../fixtures/decorators';
import { pages, paginate, spaces } from '../fixtures/data';

const meta = {
  title: 'Components/PageChildren',
  component: PageChildren,
  // Inside the destination picker's list, under an expanded space.
  decorators: [inBox({ width: 510 })],
  args: { onSelectPage: fn(), limit: 15, selectedId: null, depth: 1 },
} satisfies Meta<typeof PageChildren>;
export default meta;
type Story = StoryObj<typeof meta>;

// The top-level pages of the Engineering space.
export const Default: Story = {
  args: { spaceId: spaces[0].id },
};

// Under an expanded page, its subpages.
export const Subpages: Story = {
  args: { spaceId: spaces[0].id, pageId: pages[0].id, depth: 2 },
};

export const EmptySpace: Story = {
  args: { spaceId: spaces[2].id },
  decorators: [withApi({ '/pages/sidebar-pages': paginate([]) })],
};
