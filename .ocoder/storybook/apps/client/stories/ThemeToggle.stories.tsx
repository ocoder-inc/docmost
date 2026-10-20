import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeToggle } from '@source/apps/client/src/components/theme-toggle';

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} satisfies Meta<typeof ThemeToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

// Shows the sun in light mode and the moon in dark mode.
export const Default: Story = {};
