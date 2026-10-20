import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';

// The control side of a settings row; it is shown in its row, beside the text.
const meta = {
  title: 'Components/ResponsiveSettingsControl',
  component: ResponsiveSettingsControl,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 868 }}>
        <ResponsiveSettingsRow>
          <ResponsiveSettingsContent>
            <Text size="md">Restrict API key creation to admins</Text>
            <Text size="sm" c="dimmed">
              Only admins and owners can create new API keys. Existing member keys will continue to work.
            </Text>
          </ResponsiveSettingsContent>
          <Story />
        </ResponsiveSettingsRow>
      </div>
    ),
  ],
  args: { children: <Switch defaultChecked aria-label="Restrict API key creation to admins" /> },
} satisfies Meta<typeof ResponsiveSettingsControl>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
