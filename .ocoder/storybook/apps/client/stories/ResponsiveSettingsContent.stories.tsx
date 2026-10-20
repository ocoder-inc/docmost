import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/ResponsiveSettingsContent',
  component: ResponsiveSettingsContent,
  // The left side of a settings row in the settings pages' 900px column.
  decorators: [
    (Story) => (
      <ResponsiveSettingsRow>
        <Story />
        <ResponsiveSettingsControl>
          <Switch aria-label="Comment mentions" defaultChecked />
        </ResponsiveSettingsControl>
      </ResponsiveSettingsRow>
    ),
    inBox({ maxWidth: 900 }),
  ],
} satisfies Meta<typeof ResponsiveSettingsContent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text size="md">Comment mentions</Text>
        <Text size="sm" c="dimmed">
          Get notified when someone mentions you in a comment.
        </Text>
      </>
    ),
  },
};
