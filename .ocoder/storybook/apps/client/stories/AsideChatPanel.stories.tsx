import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatPanel from '@source/apps/client/src/ee/ai-chat/components/aside-chat-panel';
import { withRoutePath } from '../.storybook/providers';
import { pages } from '../fixtures/data';

// The chat tab of a page's 350px aside; the page in the URL is offered as context.
const meta = {
  title: 'Components/AsideChatPanel',
  component: AsideChatPanel,
  decorators: [
    (Story) => (
      <div style={{ width: 350, height: 700, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
    withRoutePath('/s/:spaceSlug/p/:pageSlug'),
  ],
  parameters: { route: `/s/engineering/p/onboarding-guide-${pages[0].slugId}` },
} satisfies Meta<typeof AsideChatPanel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
