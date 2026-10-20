import type { Meta, StoryObj } from '@storybook/react-vite';

import IconMermaid from '@source/apps/client/src/components/icons/icon-mermaid';

const meta = {
  title: 'Components/IconMermaid',
  component: IconMermaid,
} satisfies Meta<typeof IconMermaid>;
export default meta;
type Story = StoryObj<typeof meta>;

// The app shows it as a menu item's leading icon.
export const Default: Story = { args: { size: 16 } };
