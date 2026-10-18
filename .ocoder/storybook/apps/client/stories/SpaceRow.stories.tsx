import type { Meta, StoryObj } from '@storybook/react-vite';

import { SpaceRow } from '@source/apps/client/src/components/ui/destination-picker/space-row';
import { withApp } from '../fixtures/story-kit';
import { engineeringSpace, handbookSpace, pickerQueries } from '../fixtures/picker-data';

const meta = {
  title: 'Components/SpaceRow',
  component: SpaceRow,
  decorators: [
    // A row of the destination picker, inside the 550px modal.
    (Story) => (
      <div style={{ width: 502, padding: 24 }}>
        <Story />
      </div>
    ),
    withApp({ queries: pickerQueries }),
  ],
} satisfies Meta<typeof SpaceRow>;
export default meta;
type Story = StoryObj<typeof meta>;

const common = { limit: 15, onSelectSpace: () => {}, onSelectPage: () => {} };

// A space the user can write to, in the destination picker: chevron, space avatar, name.
export const Default: Story = {
  args: { ...common, space: engineeringSpace, selectedId: null },
};

// The space picked as the destination.
export const Selected: Story = {
  args: { ...common, space: engineeringSpace, selectedId: 'sp-eng' },
};

// A space where the user is only a reader: locked, no chevron.
export const ReadOnly: Story = {
  args: { ...common, space: handbookSpace, selectedId: null },
};

// Chevron clicked: the space's top-level pages load underneath.
export const Expanded: Story = {
  args: { ...common, space: engineeringSpace, selectedId: null },
  play: async ({ canvasElement }) => {
    canvasElement.querySelector<HTMLElement>('button[aria-label="Expand"]')?.click();
    await new Promise((r) => setTimeout(r, 50));
  },
};
