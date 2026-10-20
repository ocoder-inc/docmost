import type { Meta, StoryObj } from '@storybook/react-vite';

import { YoutubeIcon } from '@source/apps/client/src/components/icons/youtube-icon';

const meta = {
  title: 'Components/YoutubeIcon',
  component: YoutubeIcon,
} satisfies Meta<typeof YoutubeIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Toolbar and menu items show it at 16px, beside the item's label.
export const Default: Story = {
  args: { size: 16 },
};
