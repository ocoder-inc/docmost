import type { Meta, StoryObj } from '@storybook/react-vite';

import PageListSkeleton from '@source/apps/client/src/components/ui/page-list-skeleton';

const meta = {
  title: 'Components/PageListSkeleton',
  component: PageListSkeleton,
  // Shown in the home page's 900px container while recent/favorite pages load.
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageListSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

// The loading state of the "Recently updated" and "Favorites" lists on the home page.
export const Default: Story = {};
