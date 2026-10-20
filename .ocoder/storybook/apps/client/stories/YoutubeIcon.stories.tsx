import type { Meta, StoryObj } from '@storybook/react-vite';

import { YoutubeIcon } from '@source/apps/client/src/components/icons/youtube-icon';

const meta = {
  title: 'Components/YoutubeIcon',
  component: YoutubeIcon,
} satisfies Meta<typeof YoutubeIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app shows it as a menu item's leading icon.
export const Default: Story = { args: { size: 16 } };
