import type { Meta, StoryObj } from '@storybook/react-vite';

import { MiroIcon } from '@source/apps/client/src/components/icons/miro-icon';

const meta = {
  title: 'Components/MiroIcon',
  component: MiroIcon,
} satisfies Meta<typeof MiroIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

// The size the editor's insert menus and the SSO buttons show it at.
export const Default: Story = {
  args: { size: 16 },
};
