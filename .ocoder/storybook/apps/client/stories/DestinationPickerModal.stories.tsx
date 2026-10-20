import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

import { DestinationPickerModal } from '@source/apps/client/src/components/ui/destination-picker/destination-picker-modal';
import { pages } from '../fixtures/data';

const meta = {
  title: 'Components/DestinationPickerModal',
  component: DestinationPickerModal,
  decorators: [
    // Opened from the page's "Move" menu item.
    (Story) => (
      <>
        <Button variant="default" leftSection={<IconArrowRight size={16} />}>
          Move
        </Button>
        <Story />
      </>
    ),
  ],
  args: {
    opened: true,
    onClose: fn(),
    onSelect: fn(),
    title: 'Move page',
    actionLabel: 'Move',
    excludePageId: pages[0].id,
  },
} satisfies Meta<typeof DestinationPickerModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
