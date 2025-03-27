/** @jsxImportSource @emotion/react */

import { BubbleMenu } from "@tiptap/react";
import { css } from "@emotion/react";
import { Editor } from "@tiptap/react";

const Style = {
  container: css({
    display: "flex",
    gap: "10px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }),
  button: css({
    cursor: "pointer",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#f0f0f0",
    "&:hover": {
      backgroundColor: "#e0e0e0",
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
