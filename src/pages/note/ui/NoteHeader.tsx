/** @jsxImportSource @emotion/react */

import {
  GridIcon,
  ListIcon,
} from "@shared/components/icon";
import { useNotePageStore } from "../model/useNotePageStore";
import { noteHeaderStyle } from "./NoteHeader.style";

function NoteHeader({ title }: { title: string }) {
  const { container, h2, button, buttonContainer } =
    noteHeaderStyle;
  const { setIsColumn } = useNotePageStore(
    (state) => state
  );
  return (
    <div css={container}>
      <h2 css={h2}>{title}</h2>
      <div css={buttonContainer}>
        <button
          css={button}
          onClick={() => {
            setIsColumn(true);
          }}
        >
          <ListIcon />
          List
        </button>
        <button
          css={button}
          onClick={() => {
            setIsColumn(false);
          }}
        >
          <GridIcon />
          Grid
        </button>
      </div>
    </div>
  );
}

export default NoteHeader;
