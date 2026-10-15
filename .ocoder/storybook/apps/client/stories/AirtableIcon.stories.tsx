import type { Meta, StoryObj } from '@storybook/react-vite';

import { AirtableIcon } from '@source/apps/client/src/components/icons/airtable-icon';

const meta = {
  title: 'Components/AirtableIcon',
  component: AirtableIcon,
} satisfies Meta<typeof AirtableIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 16 },
};
