import type { Meta, StoryObj } from '@storybook/react-vite';

import EnableAiSearch from '@source/apps/client/src/ee/ai/components/enable-ai-search';
import { withApp } from '../fixtures/story-kit';

const meta = {
  title: 'Components/EnableAiSearch',
  component: EnableAiSearch,
  // A row on the Settings > AI page, inside the settings content column (900px).
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900, padding: 16 }}>
        <Story />
      </div>
    ),
    withApp(),
  ],
} satisfies Meta<typeof EnableAiSearch>;
export default meta;
type Story = StoryObj<typeof meta>;

// Settings > AI on a self-hosted enterprise workspace with AI search on.
export const Default: Story = {};
