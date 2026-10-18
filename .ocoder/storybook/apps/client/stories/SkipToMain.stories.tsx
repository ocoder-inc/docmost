import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkipToMain } from '@source/apps/client/src/components/ui/skip-to-main';

const meta = {
  title: 'Components/SkipToMain',
  component: SkipToMain,
} satisfies Meta<typeof SkipToMain>;
export default meta;
type Story = StoryObj<typeof meta>;

// The first link on every signed-in page; it stays off-screen until it gets keyboard focus.
export const Default: Story = {};

// The link as a keyboard user sees it after pressing Tab.
export const Focused: Story = {
  play: async ({ canvasElement }) => {
    canvasElement.querySelector<HTMLAnchorElement>('a')?.focus();
  },
};
