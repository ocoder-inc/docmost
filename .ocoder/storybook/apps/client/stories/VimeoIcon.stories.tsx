import type { Meta, StoryObj } from '@storybook/react-vite';

import { VimeoIcon } from '@source/apps/client/src/components/icons/vimeo-icon';

const meta = {
  title: 'Components/VimeoIcon',
  component: VimeoIcon,
} satisfies Meta<typeof VimeoIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
