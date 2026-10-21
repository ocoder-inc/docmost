import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// As in the SSO and publish forms: copies a URL shown next to it.
export const Default: Story = {
  args: { text: 'https://docs.example.com/api/sso/oidc/callback' },
};

// As in the AI chat: a custom label disambiguates it from neighbouring copy buttons.
export const WithLabel: Story = {
  args: {
    text: 'Here is a summary of the onboarding page.',
    label: 'Copy assistant response',
  },
};
