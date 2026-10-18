import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@mantine/core';

import { ResponsiveSettingsContent } from '@source/apps/client/src/components/ui/responsive-settings-row';

const meta = {
  title: 'Components/ResponsiveSettingsContent',
  component: ResponsiveSettingsContent,
} satisfies Meta<typeof ResponsiveSettingsContent>;
export default meta;
type Story = StoryObj<typeof meta>;

// The text side of a settings row, as in the 2-step verification setting on /settings/account/profile.
export const Default: Story = {
  args: {
    children: (
      <>
        <Text size="md">2-step verification</Text>
        <Text size="sm" c="dimmed">
          Protect your account with an additional verification layer when signing in.
        </Text>
      </>
    ),
  },
};
