import type { Meta, StoryObj } from '@storybook/react-vite';

import { YoutubeIcon } from '@source/apps/client/src/components/icons/youtube-icon';

const meta = {
  title: 'Components/YoutubeIcon',
  component: YoutubeIcon,
} satisfies Meta<typeof YoutubeIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The left icon of the "YouTube" item in the editor toolbar's embed menu (16px).
export const Default: Story = {
  args: { size: 16 },
};
