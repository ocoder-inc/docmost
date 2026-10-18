import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

import { DestinationPickerModal } from '@source/apps/client/src/components/ui/destination-picker/destination-picker-modal';
import { withApp } from '../fixtures/story-kit';
import { pickerQueries } from '../fixtures/picker-data';

const meta = {
  title: 'Components/DestinationPickerModal',
  component: DestinationPickerModal,
  decorators: [
    // The modal renders in a portal; keep the button that opened it in the story root.
    (Story) => (
      <div>
        <Button size="xs">Use template</Button>
        <Story />
      </div>
    ),
    withApp({ queries: pickerQueries }),
  ],
} satisfies Meta<typeof DestinationPickerModal>;
export default meta;
type Story = StoryObj<typeof meta>;

// "Use template" on a template: pick the space to create the page in. The template's space is
// pre-selected, and the search filters spaces only.
export const Default: Story = {
  args: {
    opened: true,
    onClose: () => {},
    title: 'Choose destination',
    actionLabel: 'Create page',
    onSelect: () => {},
    initialSpaceId: 'sp-eng',
    searchSpacesOnly: true,
  },
};
