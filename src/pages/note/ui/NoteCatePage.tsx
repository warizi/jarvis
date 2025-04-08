/** @jsxImportSource @emotion/react */

import {
  DragableNoteList,
  NoteCreateBtn,
} from "@features/note";
import { useNoteCateInfo } from "../model/useNoteCateInfo";
import NoteHeader from "./NoteHeader";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { useNotePageStore } from "../model/useNotePageStore";
import { useNoteFilter } from "@widgets/note";

function NoteCatePage() {
  const { data, id, noteList } = useNoteCateInfo();
  const { isColumn } = useNotePageStore();
  const { getFilteredNoteList } = useNoteFilter();
  return (
    <div>
      <NoteHeader title={data?.name || ""} />
      <NoteCreateBtn cateId={id} />
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
        />
      </div>
    </div>
  );
}

export default NoteCatePage;
