/** @jsxImportSource @emotion/react */

import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
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
  const { handleDragEnd } = useDnDNote();
  const { openNoteSplitModal } = useNoteSplitModal();

  return (
    <div
      css={
        isColumn
          ? {
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              gap: "5px",
              padding: "10px",
            }
          : {
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
              padding: "10px",
              width: "100%",
            }
      }
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
