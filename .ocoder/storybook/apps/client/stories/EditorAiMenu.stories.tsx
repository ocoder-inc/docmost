import type { Meta, StoryObj } from '@storybook/react-vite';

import { EditorAiMenu } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/ai-menu';

const meta = {
  title: 'Components/EditorAiMenu',
  component: EditorAiMenu,
} satisfies Meta<typeof EditorAiMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
