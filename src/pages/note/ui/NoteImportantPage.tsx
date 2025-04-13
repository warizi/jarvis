/** @jsxImportSource @emotion/react */

import {
  DragableNoteList,
  useGetAllByImportantQuery,
} from "@features/note";
import NoteHeader from "./NoteHeader";
import { useNoteFilter } from "@widgets/note";
import { useNotePageStore } from "../model/useNotePageStore";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";

function NoteImportantPage() {
  const { isColumn } = useNotePageStore();
  const { getFilteredNoteList } = useNoteFilter();
  const { data: noteList } = useGetAllByImportantQuery();

  return (
    <div>
      <NoteHeader title="중요 Note" />
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

export default NoteImportantPage;
