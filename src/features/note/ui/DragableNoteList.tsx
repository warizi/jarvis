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
import { useNoteSplitModal } from "../model/useNoteSplitModal";
import NoteCard from "./NoteCard";

function DragableNoteList({
  noteList,
  isColumn = true,
}: {
  noteList: (Note & Id)[];
  isColumn?: boolean;
}) {
  const { container } = noteListStyles;
  const { handleDragEnd } = useDnDNote();
  const { openNoteSplitModal } = useNoteSplitModal();

  return (
    <div
      css={{
        ...container,
        flexDirection: isColumn ? "column" : "row",
        gap: isColumn ? "5px" : "16px",
      }}
    >
      {" "}
      <SortableDndContext
        data={noteList || []}
        handleDragEnd={handleDragEnd}
      >
        {(item) =>
          item?.map((note) => (
            <DraggableWrapper key={note.id} id={note.id}>
              {isColumn ? (
                <NoteItem
                  key={note.id}
                  data={note}
                  onClick={openNoteSplitModal(note)}
                />
              ) : (
                <NoteCard
                  key={note.id}
                  data={note}
                  onClick={openNoteSplitModal(note)}
                />
              )}
            </DraggableWrapper>
          ))
        }
      </SortableDndContext>
    </div>
  );
}

export default DragableNoteList;
