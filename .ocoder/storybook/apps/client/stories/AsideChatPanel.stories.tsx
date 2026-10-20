import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatPanel from '@source/apps/client/src/ee/ai-chat/components/aside-chat-panel';
import { atRoutePattern, shellBackground } from '../fixtures/decorators';

const meta = {
  title: 'Components/AsideChatPanel',
  component: AsideChatPanel,
  // The page aside's chat tab: 350px wide, below the 45px header, while reading a page.
  decorators: [
    atRoutePattern('/s/:spaceSlug/p/:pageSlug'),
    (Story) => (
      <div style={{ width: 350, height: 755, padding: 16, display: 'flex', flexDirection: 'column', background: shellBackground }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen', route: '/s/engineering/p/deployment-runbook-Xk3PqR8sTv' },
} satisfies Meta<typeof AsideChatPanel>;
export default meta;
type Story = StoryObj<typeof meta>;

// A new chat about the open page, which is attached as context.
export const Default: Story = {};
