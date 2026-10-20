import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';

// A settings row as the 2-step verification setting lays it out: text on the left, control on the right.
const meta = {
  title: 'Components/ResponsiveSettingsRow',
  component: ResponsiveSettingsRow,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <Story />
      </div>
    ),
  ],
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
          <Button variant="default">Add 2FA method</Button>
        </ResponsiveSettingsControl>
      </>
    ),
  },
} satisfies Meta<typeof ResponsiveSettingsRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
