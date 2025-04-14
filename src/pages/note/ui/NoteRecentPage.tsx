/** @jsxImportSource @emotion/react */

import { useNoteFilter } from "@widgets/note";
import { useNotePageStore } from "../model/useNotePageStore";
import {
  DragableNoteList,
  useGetRecentNote,
} from "@features/note";
import NoteHeader from "./NoteHeader";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";

function NoteRecentPage() {
  const { isColumn } = useNotePageStore();
  const { getFilteredNoteList } = useNoteFilter();
  const { data: noteList } = useGetRecentNote(10);
  return (
    <div>
      <NoteHeader title="최근 Note" />
      <div
        css={{
          overflow: "hidden",
        }}
      >
        <DragableNoteList
          noteList={
            getFilteredNoteList(
              noteList as (Note & Id)[]
            ) || []
          }
          isColumn={isColumn}
          disabled
        />
      </div>
    </div>
  );
}

export default NoteRecentPage;
