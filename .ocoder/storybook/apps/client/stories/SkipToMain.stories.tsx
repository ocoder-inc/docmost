import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkipToMain } from '@source/apps/client/src/components/ui/skip-to-main';

const meta = {
  title: 'Components/SkipToMain',
  component: SkipToMain,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SkipToMain>;
export default meta;
type Story = StoryObj<typeof meta>;

// The skip link is off-screen until it has keyboard focus; this shows it focused, as after the first Tab.
export const Default: Story = {
  play: async ({ canvasElement }) => {
    canvasElement.querySelector<HTMLAnchorElement>('a[href="#main-content"]')?.focus();
  },
};
