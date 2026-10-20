import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, Text } from '@mantine/core';

import {
  ResponsiveSettingsContent,
  ResponsiveSettingsControl,
  ResponsiveSettingsRow,
} from '@source/apps/client/src/components/ui/responsive-settings-row';
import { inBox } from '../fixtures/decorators';

const meta = {
  title: 'Components/ResponsiveSettingsControl',
  component: ResponsiveSettingsControl,
  // The right side of a settings row in the settings pages' 900px column.
  decorators: [
    (Story) => (
      <ResponsiveSettingsRow>
        <ResponsiveSettingsContent>
          <Text size="md">Page width</Text>
          <Text size="sm" c="dimmed">
            Choose your preferred page width.
          </Text>
        </ResponsiveSettingsContent>
        <Story />
      </ResponsiveSettingsRow>
    ),
    inBox({ maxWidth: 900 }),
  ],
} satisfies Meta<typeof ResponsiveSettingsControl>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Select
        aria-label="Page width"
        data={['Normal width', 'Full width']}
        defaultValue="Normal width"
        allowDeselect={false}
        w={160}
        comboboxProps={{ withinPortal: false }}
      />
    ),
  },
};
