import type { Meta, StoryObj } from '@storybook/react-vite';

import { DestinationPicker } from '@source/apps/client/src/components/ui/destination-picker/destination-picker';
import { withApp } from '../fixtures/story-kit';
import { pickerQueries } from '../fixtures/picker-data';

const meta = {
  title: 'Components/DestinationPicker',
  component: DestinationPicker,
  decorators: [
    // Shown in the body of the 550px destination modal.
    (Story) => (
      <div style={{ width: 502, padding: 24 }}>
        <Story />
      </div>
    ),
    withApp({ queries: pickerQueries }),
  ],
} satisfies Meta<typeof DestinationPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

// Inside DestinationPickerModal: every space the user belongs to; read-only spaces are locked.
export const Default: Story = {
  args: { onSelectionChange: () => {} },
};

// As "Use template" opens it: the template's space pre-selected, search over spaces only.
export const SpacesOnly: Story = {
  args: { onSelectionChange: () => {}, initialSpaceId: 'sp-eng', searchSpacesOnly: true },
};

// A space expanded to its pages, and one page expanded to its children.
export const Expanded: Story = {
  args: { onSelectionChange: () => {} },
  play: async ({ canvasElement }) => {
    const wait = () => new Promise((r) => setTimeout(r, 50));
    canvasElement.querySelector<HTMLElement>('[data-space-id="sp-eng"] button')?.click();
    await wait();
    const rows = Array.from(canvasElement.querySelectorAll<HTMLElement>('[role=button]'));
    rows.find((r) => r.textContent === 'Architecture')?.querySelector('button')?.click();
    await wait();
  },
};
