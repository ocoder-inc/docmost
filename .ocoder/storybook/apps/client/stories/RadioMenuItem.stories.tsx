import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioMenuItem } from '@source/apps/client/src/components/ui/radio-menu-item';

const meta = {
  title: 'Components/RadioMenuItem',
  component: RadioMenuItem,
} satisfies Meta<typeof RadioMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
