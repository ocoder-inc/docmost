import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

import { EditorAiMenu } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/ai-menu';
import { showAiMenuAtom } from '@source/apps/client/src/features/editor/atoms/editor-atoms';

/**
 * The "Ask AI" menu opens under the selected text of a page editor. This renders a small editor with
 * a paragraph selected and opens the menu the way the bubble menu's "Ask AI" button does.
 */
function EditorWithAiMenu() {
  const setShowAiMenu = useSetAtom(showAiMenuAtom);
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      '<h2>Incident runbook</h2>' +
      '<p>When an alert fires, the on-call engineer acknowledges it in PagerDuty within five minutes and opens an incident channel.</p>' +
      '<p>Post a status update every thirty minutes until the incident is resolved.</p>',
  });

  useEffect(() => {
    if (!editor) return;
    // Select the first paragraph without focusing the editor (focus closes the menu).
    const start = editor.state.doc.child(0).nodeSize + 1;
    const end = start + editor.state.doc.child(1).content.size;
    editor.commands.setTextSelection({ from: start, to: end });
    // After the menu's own mount effects, which close it.
    const id = requestAnimationFrame(() => setShowAiMenu(true));
    return () => cancelAnimationFrame(id);
  }, [editor, setShowAiMenu]);

  return (
    <div style={{ maxWidth: 900, height: 600, padding: '0 48px' }}>
      <EditorContent editor={editor} />
      {editor && <EditorAiMenu editor={editor} />}
    </div>
  );
}

const meta = {
  title: 'Components/EditorAiMenu',
  component: EditorAiMenu,
  render: () => <EditorWithAiMenu />,
} satisfies Meta<typeof EditorAiMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
