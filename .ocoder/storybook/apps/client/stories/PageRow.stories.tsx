import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageRow } from '@source/apps/client/src/components/ui/destination-picker/page-row';

const meta = {
  title: 'Components/PageRow',
  component: PageRow,
} satisfies Meta<typeof PageRow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
