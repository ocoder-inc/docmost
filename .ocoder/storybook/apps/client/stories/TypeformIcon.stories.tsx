import type { Meta, StoryObj } from '@storybook/react-vite';

import { TypeformIcon } from '@source/apps/client/src/components/icons/typeform-icon';

const meta = {
  title: 'Components/TypeformIcon',
  component: TypeformIcon,
} satisfies Meta<typeof TypeformIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
