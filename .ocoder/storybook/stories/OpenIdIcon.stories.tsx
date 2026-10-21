import type { Meta, StoryObj } from '@storybook/react-vite';

import { OpenIdIcon } from '@source/apps/client/src/components/icons/openid-icon';

const meta = {
  title: 'Components/OpenIdIcon',
  component: OpenIdIcon,
} satisfies Meta<typeof OpenIdIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { size: 24 } };
