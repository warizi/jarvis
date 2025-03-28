/** @jsxImportSource @emotion/react */

import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { noteListStyles } from "./DragableNoteList.style";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import NoteItem from "./NoteItem";
import { useDnDNote } from "../model/useDnDNote";

function DragableNoteList({
  noteList,
}: {
  noteList: (Note & Id)[];
}) {
  const { container } = noteListStyles;
  const { handleDragEnd } = useDnDNote();
  return (
    <div css={container}>
      {" "}
      <SortableDndContext
        data={noteList || []}
        handleDragEnd={handleDragEnd}
      >
        {(item) =>
          item?.map((note) => (
            <DraggableWrapper key={note.id} id={note.id}>
              <NoteItem key={note.id} data={note} />
            </DraggableWrapper>
          ))
        }
      </SortableDndContext>
    </div>
  );
}

export default DragableNoteList;
