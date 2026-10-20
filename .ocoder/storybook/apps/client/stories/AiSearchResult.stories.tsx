import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchResult } from '@source/apps/client/src/ee/ai/components/ai-search-result';
import { samplePages } from '../fixtures/data';

const source = (page: (typeof samplePages)[number], similarity: number, excerpt: string) => ({
  pageId: page.id,
  title: page.title,
  slugId: page.slugId,
  spaceSlug: 'engineering',
  similarity,
  distance: 1 - similarity,
  chunkIndex: 0,
  excerpt,
});

const result = {
  answer:
    'To deploy, merge your change to `main` and wait for CI. Then **promote the build to staging**, run the smoke tests, and roll out to production behind a 10% canary.',
  sources: [
    source(samplePages[2], 0.91, 'Promote the build to staging and run the smoke tests.'),
    source(samplePages[1], 0.78, 'Services are deployed as containers behind the gateway.'),
    source(samplePages[2], 0.72, 'Roll out to production with a canary at 10%.'),
  ],
};

const meta = {
  title: 'Components/AiSearchResult',
  component: AiSearchResult,
  // The answer inside the search spotlight's AI mode, an xl (780px) modal.
  decorators: [(Story) => <div style={{ width: 780 }}><Story /></div>],
} satisfies Meta<typeof AiSearchResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { result },
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const Streaming: Story = {
  args: {
    isLoading: true,
    streamingAnswer: 'To deploy, merge your change to `main` and wait for CI. Then',
    streamingSources: result.sources.slice(0, 1),
  },
};
