import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PageChildren } from '@source/apps/client/src/components/ui/destination-picker/page-children';
import { withApi } from '../.storybook/providers';
import { paginated, spaces } from '../fixtures/data';

// The pages listed under an expanded space in the destination picker, in its 550px modal.
const meta = {
  title: 'Components/PageChildren',
  component: PageChildren,
  decorators: [
    (Story) => (
      <div style={{ width: 502 }}>
        <Story />
      </div>
    ),
  ],
  args: { spaceId: spaces[0].id, depth: 1, limit: 15, selectedId: null, onSelectPage: fn() },
} satisfies Meta<typeof PageChildren>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptySpace: Story = {
  decorators: [withApi({ '/pages/sidebar-pages': () => paginated([]) })],
};
