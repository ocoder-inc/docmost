import type { Meta, StoryObj } from '@storybook/react-vite';

import CardCarousel from '@source/apps/client/src/components/ui/card-carousel';

const meta = {
  title: 'Components/CardCarousel',
  component: CardCarousel,
} satisfies Meta<typeof CardCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Wrappers render what they are given; this shows the wrapper's own layout around it.
  args: { children: 'Example content' },
};
