import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyTextButton from '@source/apps/client/src/components/common/copy';

const meta = {
  title: 'Components/CopyTextButton',
  component: CopyTextButton,
} satisfies Meta<typeof CopyTextButton>;
export default meta;
type Story = StoryObj<typeof meta>;

// As in the SCIM URL panel and the SSO forms: copies a URL with the default label.
export const Default: Story = {
  args: { text: 'https://docs.example.com/api/sso/oidc/callback' },
};

// As in the AI chat message actions: a custom label disambiguates the button.
export const WithLabel: Story = {
  args: {
    text: 'Here is a summary of the onboarding page you asked about.',
    label: 'Copy assistant response',
  },
};
