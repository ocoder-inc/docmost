import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';

// The text side of a settings row; it is shown in its row, beside the control.
const meta = {
  title: 'Components/ResponsiveSettingsContent',
  component: ResponsiveSettingsContent,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <ResponsiveSettingsRow>
          <Story />
          <ResponsiveSettingsControl>
            <Button variant="default">Add 2FA method</Button>
          </ResponsiveSettingsControl>
        </ResponsiveSettingsRow>
      </div>
    ),
  ],
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
} satisfies Meta<typeof ResponsiveSettingsContent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
