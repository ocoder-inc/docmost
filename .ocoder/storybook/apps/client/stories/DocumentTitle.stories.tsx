import type { Meta, StoryObj } from '@storybook/react-vite';

import { DocumentTitle } from '@source/apps/client/src/components/ui/document-title';

const meta = {
  title: 'Components/DocumentTitle',
  component: DocumentTitle,
} satisfies Meta<typeof DocumentTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Wrappers render what they are given; this shows the wrapper's own layout around it.
  args: { children: 'Example content' },
};
