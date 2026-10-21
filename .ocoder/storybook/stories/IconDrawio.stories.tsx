import type { Meta, StoryObj } from '@storybook/react-vite';

import IconDrawio from '@source/apps/client/src/components/icons/icon-drawio';

const meta = {
  title: 'Components/IconDrawio',
  component: IconDrawio,
} satisfies Meta<typeof IconDrawio>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { size: 24 } };
