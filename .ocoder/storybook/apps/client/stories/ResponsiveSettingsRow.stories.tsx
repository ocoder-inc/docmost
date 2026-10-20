import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/ResponsiveSettingsRow',
  component: ResponsiveSettingsRow,
  // The settings pages' 900px column.
  decorators: [inBox({ maxWidth: 900 })],
} satisfies Meta<typeof ResponsiveSettingsRow>;
export default meta;
type Story = StoryObj<typeof meta>;

// A notification preference: its label and description, with the switch at the end of the row.
export const Default: Story = {
  args: {
    children: (
      <>
        <ResponsiveSettingsContent>
          <Text size="md">Page updates</Text>
          <Text size="sm" c="dimmed">
            Get notified when pages you watch are updated.
          </Text>
        </ResponsiveSettingsContent>
        <ResponsiveSettingsControl>
          <Switch defaultChecked aria-label="Page updates" />
        </ResponsiveSettingsControl>
      </>
    ),
  },
};
