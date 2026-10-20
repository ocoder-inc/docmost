import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatToolGroup from '@source/apps/client/src/ee/ai-chat/components/chat-tool-group';
import { samplePages } from '../fixtures/data';

const toolCalls = [
  { id: 'call_1', name: 'list_spaces', args: {}, result: { spaces: ['Engineering', 'Product'] } },
  { id: 'call_2', name: 'search_pages', args: { query: 'deployment' }, result: { results: [{ title: samplePages[2].title }] } },
  { id: 'call_3', name: 'get_page', args: { pageId: samplePages[2].id }, result: { title: samplePages[2].title } },
];

const meta = {
  title: 'Components/ChatToolGroup',
  component: ChatToolGroup,
  // The tool steps above an assistant answer, in the chat column.
  decorators: [(Story) => <div style={{ maxWidth: 720 }}><Story /></div>],
} satisfies Meta<typeof ChatToolGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { toolCalls },
};

export const Expanded: Story = {
  args: { toolCalls },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'));
  },
};

// While the assistant is still answering, the step in progress is shown.
export const Streaming: Story = {
  args: { toolCalls: [toolCalls[0], { ...toolCalls[1], result: undefined }], isStreaming: true },
};
