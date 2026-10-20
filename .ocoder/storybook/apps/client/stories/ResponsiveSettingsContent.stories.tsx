import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';

const meta = {
  title: 'Components/ResponsiveSettingsContent',
  component: ResponsiveSettingsContent,
  // The three parts make up one settings row, as on the AI and API settings pages.
  render: () => (
    <ResponsiveSettingsRow>
      <ResponsiveSettingsContent>
        <Text size="md">Restrict API key creation to admins</Text>
        <Text size="sm" c="dimmed">
          Only admins and owners can create new API keys. Existing member keys will continue to work.
        </Text>
      </ResponsiveSettingsContent>
      <ResponsiveSettingsControl>
        <Switch defaultChecked aria-label="Restrict API key creation to admins" />
      </ResponsiveSettingsControl>
    </ResponsiveSettingsRow>
  ),
  decorators: [(Story) => <div style={{ maxWidth: 868 }}><Story /></div>],
} satisfies Meta<typeof ResponsiveSettingsContent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
};
