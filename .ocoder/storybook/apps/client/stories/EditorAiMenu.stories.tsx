import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Container } from '@mantine/core';
import { useSetAtom } from 'jotai';

import { EditorAiMenu } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/ai-menu';
import { showAiMenuAtom } from '@source/apps/client/src/features/editor/atoms/editor-atoms';

/** A page editor with a sentence selected, as when "Ask AI" is chosen from the bubble menu. */
function PageWithAiMenu() {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      '<h2>Deployment runbook</h2>' +
      '<p>Deploys run from main through the CI pipeline. Every release is behind a feature flag and is rolled out to ten percent of workspaces first.</p>' +
      '<p>Database migrations ship one release ahead of the code that needs them.</p>',
    immediatelyRender: true,
  });
  const setShowAiMenu = useSetAtom(showAiMenuAtom);
  // The menu closes itself on mount (on every route change); the app opens it afterwards, from the
  // bubble menu of an editor that has finished initialising, as this does.
  useEffect(() => {
    if (!editor) return;
    const open = () => {
      editor.commands.setTextSelection({ from: 21, to: 69 });
      setShowAiMenu(true);
    };
    if (editor.isInitialized) open();
    else editor.on('create', open);
    return () => {
      editor.off('create', open);
    };
  }, [editor, setShowAiMenu]);
  return (
    <Container size={900}>
      <EditorContent editor={editor} />
      <EditorAiMenu editor={editor} />
    </Container>
  );
}

const meta = {
  title: 'Components/EditorAiMenu',
  component: EditorAiMenu,
  render: () => <PageWithAiMenu />,
} satisfies Meta<typeof EditorAiMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// Open below the selection: the prompt input and the list of actions.
export const Default: Story = {
  args: { editor: null },
};
