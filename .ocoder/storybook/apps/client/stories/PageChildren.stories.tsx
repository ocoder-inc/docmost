import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageChildren } from '@source/apps/client/src/components/ui/destination-picker/page-children';
import { withApp } from '../fixtures/story-kit';
import { engineeringRootPages, pickerQueries, sidebarPagesData } from '../fixtures/picker-data';

const meta = {
  title: 'Components/PageChildren',
  component: PageChildren,
  decorators: [
    // A list in the destination picker, inside the 550px modal.
    (Story) => (
      <div style={{ width: 502, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageChildren>;
export default meta;
type Story = StoryObj<typeof meta>;

// Under an expanded space row in the destination picker: the space's top-level pages.
export const Default: Story = {
  args: { spaceId: 'sp-eng', depth: 1, limit: 15, selectedId: null, onSelectPage: () => {} },
  decorators: [withApp({ queries: pickerQueries })],
};

// Under an expanded page row: the page's children, one level deeper, one of them selected.
export const NestedPages: Story = {
  args: {
    spaceId: 'sp-eng',
    pageId: 'pg-arch',
    depth: 2,
    limit: 15,
    selectedId: 'pg-arch-collab',
    onSelectPage: () => {},
  },
  decorators: [withApp({ queries: pickerQueries })],
};

// More pages than the limit: a "Load more" row at the end.
export const WithMore: Story = {
  args: { spaceId: 'sp-eng', depth: 1, limit: 3, selectedId: null, onSelectPage: () => {} },
  decorators: [
    withApp({
      queries: [[['destination-pages', 'sp-eng', 'root'], sidebarPagesData(engineeringRootPages.slice(0, 3), 'cursor-2')]],
    }),
  ],
};

// A space with no pages yet.
export const Empty: Story = {
  args: { spaceId: 'sp-eng', depth: 1, limit: 15, selectedId: null, onSelectPage: () => {} },
  decorators: [withApp({ queries: [[['destination-pages', 'sp-eng', 'root'], sidebarPagesData([])]] })],
};
