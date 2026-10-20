import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: 'dm_live_8f2c41a9e7b3d05c6a1f', label: 'Copy API key' },
};

/** As the share modal shows it beside a public link, with the default label. */
export const DefaultLabel: Story = {
  args: { text: 'https://docs.example.com/share/k3x9a2mf/p/q3-roadmap-planning-Rt7mWq2Lp1' },
};
