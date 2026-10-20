import type { Meta, StoryObj } from '@storybook/react-vite';

import { SpaceRow } from '@source/apps/client/src/components/ui/destination-picker/space-row';

const meta = {
  title: 'Components/SpaceRow',
  component: SpaceRow,
} satisfies Meta<typeof SpaceRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
