import type { Meta, StoryObj } from '@storybook/react-vite';

import { YoutubeIcon } from '@source/apps/client/src/components/icons/youtube-icon';

const meta = {
  title: 'Components/YoutubeIcon',
  component: YoutubeIcon,
} satisfies Meta<typeof YoutubeIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus and the SSO buttons show it at.
export const Default: Story = {
  args: { size: 16 },
};
