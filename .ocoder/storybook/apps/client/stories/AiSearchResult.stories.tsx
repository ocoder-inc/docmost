import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchResult } from '@source/apps/client/src/ee/ai/components/ai-search-result';
import { inBox } from '../fixtures/decorators';
import { pages } from '../fixtures/data';

const result = {
  answer:
    'Releases are deployed from `main` by the CI pipeline. Each release goes out behind a feature flag to **10%** of ' +
    'workspaces first, and is rolled back with the steps in *Rolling back a release* if error rates rise.',
  sources: [
    { pageId: pages[0].id, title: pages[0].title, slugId: pages[0].slugId, spaceSlug: 'engineering', similarity: 0.91, distance: 0.09, chunkIndex: 0, excerpt: 'Deploys run from main' },
    { pageId: pages[0].id, title: pages[0].title, slugId: pages[0].slugId, spaceSlug: 'engineering', similarity: 0.84, distance: 0.16, chunkIndex: 2, excerpt: 'Rollouts start at 10%' },
    { pageId: 'rollback', title: 'Rolling back a release', slugId: 'Rt8YuI0oPa', spaceSlug: 'engineering', similarity: 0.8, distance: 0.2, chunkIndex: 0, excerpt: 'If error rates rise' },
  ],
};

const meta = {
  title: 'Components/AiSearchResult',
  component: AiSearchResult,
  // Inside the search spotlight, an extra-large (780px) modal.
  decorators: [inBox({ width: 748 })],
} satisfies Meta<typeof AiSearchResult>;
export default meta;
type Story = StoryObj<typeof meta>;

// The answer to "how do we deploy?", with the pages it came from.
export const Default: Story = {
  args: { result, isLoading: false },
};

export const Thinking: Story = {
  args: { isLoading: true },
};

// Part of the answer has streamed in.
export const Streaming: Story = {
  args: { isLoading: true, streamingAnswer: 'Releases are deployed from `main` by the CI pipeline.' },
};
