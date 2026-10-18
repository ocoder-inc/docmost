import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageRow } from '@source/apps/client/src/components/ui/destination-picker/page-row';
import { withApp } from '../fixtures/story-kit';
import { engineeringRootPages, pickerQueries } from '../fixtures/picker-data';

const meta = {
  title: 'Components/PageRow',
  component: PageRow,
  decorators: [
    // A row of the destination picker, inside the 550px modal.
    (Story) => (
      <div style={{ width: 502, padding: 24 }}>
        <Story />
      </div>
    ),
    withApp({ queries: pickerQueries }),
  ],
} satisfies Meta<typeof PageRow>;
export default meta;
type Story = StoryObj<typeof meta>;

const architecture = engineeringRootPages[0];

// A top-level page with sub-pages in the destination picker: chevron, emoji icon, title.
export const Default: Story = {
  args: { page: architecture as never, depth: 1, limit: 15, selectedId: null, onSelect: () => {} },
};

// The page the user picked as the destination.
export const Selected: Story = {
  args: { page: architecture as never, depth: 1, limit: 15, selectedId: 'pg-arch', onSelect: () => {} },
};

// The page being moved: it cannot be its own destination.
export const Excluded: Story = {
  args: {
    page: engineeringRootPages[1] as never,
    depth: 1,
    limit: 15,
    selectedId: null,
    excludePageId: 'pg-runbook',
    onSelect: () => {},
  },
};

// Chevron clicked: the page's children load underneath, indented.
export const Expanded: Story = {
  args: { page: architecture as never, depth: 1, limit: 15, selectedId: null, onSelect: () => {} },
  play: async ({ canvasElement }) => {
    canvasElement.querySelector<HTMLElement>('button[aria-label="Expand"]')?.click();
    await new Promise((r) => setTimeout(r, 50));
  },
};
