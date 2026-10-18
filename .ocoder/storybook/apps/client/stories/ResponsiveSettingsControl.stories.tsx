import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

import { ResponsiveSettingsControl } from '@source/apps/client/src/components/ui/responsive-settings-row';

const meta = {
  title: 'Components/ResponsiveSettingsControl',
  component: ResponsiveSettingsControl,
} satisfies Meta<typeof ResponsiveSettingsControl>;
export default meta;
type Story = StoryObj<typeof meta>;

// The control side of a settings row, as the 2-step verification button on /settings/account/profile.
export const Default: Story = {
  args: {
    children: (
      <Button variant="default" style={{ whiteSpace: 'nowrap' }}>
        Add 2FA method
      </Button>
    ),
  },
};
