import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxMenuItem } from '@source/apps/client/src/components/ui/checkbox-menu-item';

const meta = {
  title: 'Components/CheckboxMenuItem',
  component: CheckboxMenuItem,
} satisfies Meta<typeof CheckboxMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
