import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useSetAtom } from 'jotai';

import { EditorAiMenu } from '@source/apps/client/src/ee/ai/components/editor/ai-menu/ai-menu';
import { showAiMenuAtom } from '@source/apps/client/src/features/editor/atoms/editor-atoms';

const pageContent = `
  <h2>On-call handbook</h2>
  <p>Each engineer is on call for one week, starting on Monday at ten in the morning. The secondary on-call person covers escalations if the primary does not answer within fifteen minutes.</p>
  <p>Hand-offs happen in the oncall channel, where the outgoing engineer lists any open incidents.</p>
`;

/**
 * The page editor with a paragraph selected and the AI menu opened on it, as when the user clicks
 * "Ask AI" in the bubble menu. The menu positions itself under the selection, portalled to body.
 */
function PageEditorWithAiMenu() {
  const setShowAiMenu = useSetAtom(showAiMenuAtom);
  const editor = useEditor({
    extensions: [StarterKit],
    content: pageContent,
    immediatelyRender: true,
  });

  useEffect(() => {
    if (!editor) return;
    // Select the first paragraph's text (after the heading), then open the menu the way the
    // bubble menu's "Ask AI" button does. This runs after EditorAiMenu's own mount effects.
    let start = 0;
    let end = 0;
    editor.state.doc.descendants((node, pos) => {
      if (!start && node.type.name === 'paragraph') {
        start = pos + 1;
        end = pos + 1 + node.content.size;
      }
    });
    editor.commands.setTextSelection({ from: start, to: end });
    setShowAiMenu(true);
    return () => setShowAiMenu(false);
  }, [editor, setShowAiMenu]);

  return (
    <div style={{ width: 900, padding: '16px 48px', boxSizing: 'border-box' }}>
      <EditorContent editor={editor} />
      {editor && <EditorAiMenu editor={editor} />}
    </div>
  );
}

const meta = {
  title: 'Components/EditorAiMenu',
  component: EditorAiMenu,
} satisfies Meta<typeof EditorAiMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

// Opened from the editor's bubble menu ("Ask AI") on a text selection in a page.
export const Default: Story = {
  args: { editor: null },
  render: () => <PageEditorWithAiMenu />,
};
