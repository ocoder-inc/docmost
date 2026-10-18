import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchResult } from '@source/apps/client/src/ee/ai/components/ai-search-result';
import { aiSearchResponse } from '../fixtures/aichat2-messages';

const meta = {
  title: 'Components/AiSearchResult',
  component: AiSearchResult,
  // Rendered inside the search spotlight (an xl modal, 780px wide) in "Ask AI" mode.
  decorators: [
    (Story) => (
      <div style={{ width: 780 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AiSearchResult>;
export default meta;
type Story = StoryObj<typeof meta>;

// The spotlight's AI answer with its source pages (duplicates merged).
export const Default: Story = {
  args: { result: aiSearchResponse, isLoading: false, streamingAnswer: '', streamingSources: [] },
};

// Before the first streamed token arrives.
export const Loading: Story = {
  args: { isLoading: true, streamingAnswer: '', streamingSources: [] },
};

// While the answer streams in.
export const Streaming: Story = {
  args: {
    isLoading: true,
    streamingAnswer: 'New engineers get access to **GitHub**, **Linear** and the staging',
    streamingSources: aiSearchResponse.sources!.slice(0, 1),
  },
};
