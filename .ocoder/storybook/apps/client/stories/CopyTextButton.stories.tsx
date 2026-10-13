import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// As the publish tab uses it: copies the page's public share link.
export const Default: Story = {
  args: {
    text: 'https://docs.example.com/share/k7f3x9q2/p/getting-started-Xa1b2C3d',
  },
};

// As the AI chat uses it: a custom label disambiguates it for screen readers.
export const WithLabel: Story = {
  args: {
    text: 'To invite a teammate, open Settings > Members and click "Invite members".',
    label: 'Copy assistant response',
  },
};
