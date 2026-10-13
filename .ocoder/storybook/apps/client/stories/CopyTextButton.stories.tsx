import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// As next to a share link in the share modal.
export const Default: Story = {
  args: { text: 'https://acme.docmost.com/share/x7k2p9/p/q3-product-roadmap-a1b2c3d4e5' },
};

export const WithLabel: Story = {
  args: { text: 'https://acme.docmost.com/api/sso/oidc/callback', label: 'Copy callback URL' },
};
