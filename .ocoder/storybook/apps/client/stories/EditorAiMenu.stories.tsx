import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useSetAtom } from 'jotai';

import { EditorAiMenu } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/ai-menu';
import { showAiMenuAtom } from '@source/apps/client/src/features/editor/atoms/editor-atoms';

/**
 * The menu opens under the selection of a page's editor when the user picks "Ask AI". This renders a
 * small page editor with a paragraph selected and opens the menu over it.
 */
function PageEditorWithAiMenu() {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      '<h2>Deployment runbook</h2><p>Merge to main and wait for CI to pass. Promote the build to staging and run the smoke tests before rolling out to production.</p>',
  });
  const [ready, setReady] = useState(false);
  const setShowAiMenu = useSetAtom(showAiMenuAtom);

  useEffect(() => {
    if (!editor) return;
    if (editor.isInitialized) setReady(true);
    else editor.on('create', () => setReady(true));
  }, [editor]);

  useEffect(() => {
    if (!ready || !editor) return;
    const paragraph = editor.state.doc.child(1);
    const start = editor.state.doc.child(0).nodeSize + 1;
    editor.commands.setTextSelection({ from: start, to: start + paragraph.content.size });
    setShowAiMenu(true);
  }, [ready, editor, setShowAiMenu]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px' }}>
      <EditorContent editor={editor} />
      {ready && <EditorAiMenu editor={editor} />}
    </div>
  );
}

const meta = {
  title: 'Components/EditorAiMenu',
  component: EditorAiMenu,
  render: () => <PageEditorWithAiMenu />,
} satisfies Meta<typeof EditorAiMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { editor: null },
};
