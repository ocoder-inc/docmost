import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { Code, Text } from '@mantine/core';

import { DocumentTitle } from '@source/apps/client/src/components/ui/document-title';

/** The component only sets the browser tab's title; this shows what the tab would read. */
function TabTitle() {
  const [title, setTitle] = useState(document.title);
  useEffect(() => {
    const observer = new MutationObserver(() => setTitle(document.title));
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    setTitle(document.title);
    return () => observer.disconnect();
  }, []);
  return (
    <Text size="sm">
      Browser tab title: <Code data-testid="document-title">{title}</Code>
    </Text>
  );
}

const meta = {
  title: 'Components/DocumentTitle',
  component: DocumentTitle,
  decorators: [
    (Story) => (
      <>
        <Story />
        <TabTitle />
      </>
    ),
  ],
  args: { title: 'AI settings' },
} satisfies Meta<typeof DocumentTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutAppName: Story = {
  args: { title: 'Onboarding guide', withAppName: false },
};
