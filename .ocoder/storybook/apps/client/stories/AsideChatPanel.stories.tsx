import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatPanel from '@source/apps/client/src/ee/ai-chat/components/aside-chat-panel';
import { withApp } from '../fixtures/story-kit';
import { asidePage } from '../fixtures/aichat1-chats';
import { withBox, withRoutePath } from '../fixtures/aichat1-route';

const meta = {
  title: 'Components/AsideChatPanel',
  component: AsideChatPanel,
  // The page aside is 350px wide (with md padding) and full height.
  decorators: [withBox({ width: 318, height: 640, padding: 16 })],
} satisfies Meta<typeof AsideChatPanel>;
export default meta;
type Story = StoryObj<typeof meta>;

// The "AI Chat" tab of the aside on a page: a new chat with the open page attached as context.
export const Default: Story = {
  parameters: { route: `/s/engineering/p/q3-onboarding-checklist-${asidePage.slugId}` },
  decorators: [
    withRoutePath('/s/:spaceSlug/p/:pageSlug'),
    withApp({ queries: [[['pages', asidePage.slugId], asidePage]] }),
  ],
};
