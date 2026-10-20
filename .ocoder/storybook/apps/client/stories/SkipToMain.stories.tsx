import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkipToMain } from '@source/apps/client/src/components/ui/skip-to-main';

const meta = {
  title: 'Components/SkipToMain',
  component: SkipToMain,
} satisfies Meta<typeof SkipToMain>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
