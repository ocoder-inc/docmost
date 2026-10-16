import type { Meta, StoryObj } from '@storybook/react-vite';

import IconExcalidraw from '@source/apps/client/src/components/icons/icon-excalidraw';

const meta = {
  title: 'Components/IconExcalidraw',
  component: IconExcalidraw,
} satisfies Meta<typeof IconExcalidraw>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 16 },
};
