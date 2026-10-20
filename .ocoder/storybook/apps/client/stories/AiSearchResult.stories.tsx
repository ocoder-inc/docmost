import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchResult } from '@source/apps/client/src/ee/ai/components/ai-search-result';
import { pages } from '../fixtures/data';

// Shown in the search spotlight when "Ask AI" is on.
const meta = {
  title: 'Components/AiSearchResult',
  component: AiSearchResult,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AiSearchResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    result: {
      answer:
        'New engineers should start with the **Onboarding guide**, which covers:\n\n' +
        '1. Setting up the local development environment\n' +
        '2. Getting access to staging and production\n' +
        '3. The code review checklist every pull request follows',
      sources: [
        { pageId: pages[0].id, title: pages[0].title, slugId: pages[0].slugId, spaceSlug: 'engineering', similarity: 0.91, distance: 0.09, chunkIndex: 0, excerpt: '' },
        { pageId: pages[1].id, title: pages[1].title, slugId: pages[1].slugId, spaceSlug: 'engineering', similarity: 0.78, distance: 0.22, chunkIndex: 2, excerpt: '' },
      ],
    },
    isLoading: false,
  },
};

export const Thinking: Story = {
  args: { isLoading: true },
};
