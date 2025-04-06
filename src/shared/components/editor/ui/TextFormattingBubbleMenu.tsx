/** @jsxImportSource @emotion/react */

import { BubbleMenu } from "@tiptap/react";
import { Theme } from "@emotion/react";
import { Editor } from "@tiptap/react";

const Style = {
  container: (theme: Theme) => ({
    display: "flex",
    gap: "10px",
    padding: "5px",
    border: `1px solid ${theme.colors.border.gray}`,
    borderRadius: "8px",
    backgroundColor: theme.colors.background.deep,
    boxShadow: theme.shadow.medium,
  }),
  button: (theme: Theme) => ({
    cursor: "pointer",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    color: theme.colors.text.primary,
    backgroundColor: theme.colors.background.gray,
    "&:hover": {
      backgroundColor: theme.colors.primary.light,
    },
  }),
};

function TextFormattingBubbleMenu({
  editor,
}: {
  editor: Editor | null;
}) {
  if (!editor) return null;

  const applyFormat = (format: string) => {
    switch (format) {
      case "bold":
        editor.chain().focus().toggleBold().run();
        break;
      case "italic":
        editor.chain().focus().toggleItalic().run();
        break;
      case "strike":
        editor.chain().focus().toggleStrike().run();
        break;
      default:
        break;
    }
  };

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 100,
        placement: "top",
      }}
    >
      <div css={Style.container}>
        <button
          css={Style.button}
          onClick={() => applyFormat("bold")}
        >
          Bold
        </button>
        <button
          css={Style.button}
          onClick={() => applyFormat("italic")}
        >
          Italic
        </button>
        <button
          css={Style.button}
          onClick={() => applyFormat("strike")}
        >
          Strike
        </button>
      </div>
    </BubbleMenu>
  );
}

export default TextFormattingBubbleMenu;
