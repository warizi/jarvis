/** @jsxImportSource @emotion/react */

import { noteHeaderStyle } from "./NoteHeader.style";

function NoteHeader({ title }: { title: string }) {
  const { container, h2 } = noteHeaderStyle;
  return (
    <div css={container}>
      <h2 css={h2}>{title}</h2>
    </div>
  );
}

export default NoteHeader;
