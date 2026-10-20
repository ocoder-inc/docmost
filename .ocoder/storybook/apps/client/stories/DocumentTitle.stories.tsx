import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code, Text } from '@mantine/core';

import { DocumentTitle } from '@source/apps/client/src/components/ui/document-title';

/** It only sets the tab's title; this shows the title it set. */
function ShownTitle() {
  const [title, setTitle] = useState(document.title);
  useEffect(() => {
    const id = window.setInterval(() => setTitle(document.title), 50);
    return () => window.clearInterval(id);
  }, []);
  return (
    <Text size="sm">
      Document title: <Code data-testid="document-title">{title}</Code>
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
        <ShownTitle />
      </>
    ),
  ],
} satisfies Meta<typeof DocumentTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

// A settings page's title, followed by the app's name.
export const Default: Story = {
  args: { title: 'API keys' },
};

export const WithoutAppName: Story = {
  args: { title: 'Deployment runbook', withAppName: false },
};
