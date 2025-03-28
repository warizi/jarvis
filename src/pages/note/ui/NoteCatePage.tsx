/** @jsxImportSource @emotion/react */

import {
  DragableNoteList,
  NoteCreateBtn,
} from "@features/note";
import { useNoteCateInfo } from "../model/useNoteCateInfo";
import NoteHeader from "./NoteHeader";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";

function NoteCatePage() {
  const { data, id, noteList } = useNoteCateInfo();
  return (
    <div>
      <NoteHeader title={data?.name || ""} />
      <NoteCreateBtn cateId={id} />
      <DragableNoteList
        noteList={(noteList as (Note & Id)[]) || []}
      />
    </div>
  );
}

export default NoteCatePage;
