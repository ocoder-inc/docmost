import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PageChildren } from '@source/apps/client/src/components/ui/destination-picker/page-children';
import { samplePages, sampleSpaces } from '../fixtures/data';

const meta = {
  title: 'Components/PageChildren',
  component: PageChildren,
  // The pages listed under an expanded space or page in the destination picker.
  decorators: [(Story) => <div style={{ width: 502 }}><Story /></div>],
  args: { depth: 1, limit: 15, selectedId: null, onSelectPage: fn() },
} satisfies Meta<typeof PageChildren>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { spaceId: sampleSpaces[0].id },
};

export const ChildPages: Story = {
  args: { spaceId: sampleSpaces[0].id, pageId: samplePages[0].id, depth: 2 },
};

export const Empty: Story = {
  args: { spaceId: sampleSpaces[0].id, pageId: samplePages[2].id, depth: 2 },
};
