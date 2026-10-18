import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageChildren } from '@source/apps/client/src/components/ui/destination-picker/page-children';

const meta = {
  title: 'Components/PageChildren',
  component: PageChildren,
} satisfies Meta<typeof PageChildren>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
