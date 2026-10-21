import type { Meta, StoryObj } from '@storybook/react-vite';

import { FigmaIcon } from '@source/apps/client/src/components/icons/figma-icon';

const meta = {
  title: 'Components/FigmaIcon',
  component: FigmaIcon,
} satisfies Meta<typeof FigmaIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
