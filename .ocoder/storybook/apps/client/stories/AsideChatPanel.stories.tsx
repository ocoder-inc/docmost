import type { Meta, StoryObj } from '@storybook/react-vite';

import AsideChatPanel from '@source/apps/client/src/ee/ai-chat/components/aside-chat-panel';
import { withRoutePattern } from '../fixtures/decorators';
import { samplePages } from '../fixtures/data';

const meta = {
  title: 'Components/AsideChatPanel',
  component: AsideChatPanel,
  // The AI chat tab of a page's 350px aside, with the open page as context.
  decorators: [
    withRoutePattern('/s/:spaceSlug/p/:pageSlug'),
    (Story) => <div style={{ width: 318, height: 'calc(100vh - 45px - 2rem)', display: 'flex', flexDirection: 'column' }}><Story /></div>,
  ],
  parameters: { route: `/s/engineering/p/deployment-runbook-${samplePages[2].slugId}` },
} satisfies Meta<typeof AsideChatPanel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
