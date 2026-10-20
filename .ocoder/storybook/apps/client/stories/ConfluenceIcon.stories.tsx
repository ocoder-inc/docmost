import type { Meta, StoryObj } from '@storybook/react-vite';

import { ConfluenceIcon } from '@source/apps/client/src/components/icons/confluence-icon';

const meta = {
  title: 'Components/ConfluenceIcon',
  component: ConfluenceIcon,
} satisfies Meta<typeof ConfluenceIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the page import modal shows it at.
export const Default: Story = {
  args: { size: 18 },
};
