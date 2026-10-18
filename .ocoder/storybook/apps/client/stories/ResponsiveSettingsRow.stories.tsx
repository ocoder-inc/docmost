import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';

const meta = {
  title: 'Components/ResponsiveSettingsRow',
  component: ResponsiveSettingsRow,
  // Settings pages are a centred column about 800px wide.
  decorators: [(Story) => <div style={{ maxWidth: 800 }}><Story /></div>],
} satisfies Meta<typeof ResponsiveSettingsRow>;
export default meta;
type Story = StoryObj<typeof meta>;

// A setting with its description on the left and its control on the right, as the
// 2-step verification row on /settings/account/profile.
export const Default: Story = {
  args: {
    children: (
      <>
        <ResponsiveSettingsContent>
          <Text size="md">2-step verification</Text>
          <Text size="sm" c="dimmed">
            Protect your account with an additional verification layer when signing in.
          </Text>
        </ResponsiveSettingsContent>
        <ResponsiveSettingsControl>
          <Button variant="default" style={{ whiteSpace: 'nowrap' }}>
            Add 2FA method
          </Button>
        </ResponsiveSettingsControl>
      </>
    ),
  },
};
