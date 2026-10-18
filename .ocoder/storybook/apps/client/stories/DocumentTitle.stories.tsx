import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Paper, Text } from '@mantine/core';

import { DocumentTitle } from '@source/apps/client/src/components/ui/document-title';

/**
 * DocumentTitle renders nothing on the page: through react-helmet-async it sets the browser tab's
 * <title> (and any extra <head> tags it is given). This panel reads the live document head and
 * shows what the component put there, so the story has something to see.
 */
function HeadPreview() {
  const read = () => ({
    title: document.title,
    robots: document.head.querySelector('meta[name="robots"]')?.getAttribute('content') ?? null,
  });
  const [head, setHead] = useState(read);
  useEffect(() => {
    const update = () => setHead(read());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <Paper withBorder p="sm" radius="md" maw={420} m="md" data-testid="head-preview">
      <Group gap="xs">
        <Text size="xs" c="dimmed">
          Browser tab title:
        </Text>
        <Text size="sm" fw={500} data-testid="document-title">
          {head.title}
        </Text>
      </Group>
      {head.robots && (
        <Group gap="xs" mt={4}>
          <Text size="xs" c="dimmed">
            meta robots:
          </Text>
          <Text size="sm" data-testid="meta-robots">
            {head.robots}
          </Text>
        </Group>
      )}
    </Paper>
  );
}

const meta = {
  title: 'Components/DocumentTitle',
  component: DocumentTitle,
  decorators: [
    (Story) => (
      <>
        <Story />
        <HeadPreview />
      </>
    ),
  ],
} satisfies Meta<typeof DocumentTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

// A settings or list page, e.g. the Spaces page: "<page> - Docmost".
export const Default: Story = {
  args: { title: 'Spaces' },
};

// A publicly shared page: the page title alone, and a robots tag when search indexing is off.
export const SharedPage: Story = {
  args: {
    title: 'Engineering onboarding',
    withAppName: false,
    children: <meta name="robots" content="noindex" />,
  },
};
