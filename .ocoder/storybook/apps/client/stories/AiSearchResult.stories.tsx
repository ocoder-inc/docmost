import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiSearchResult } from '@source/apps/client/src/ee/ai/components/ai-search-result';

const meta = {
  title: 'Components/AiSearchResult',
  component: AiSearchResult,
} satisfies Meta<typeof AiSearchResult>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
