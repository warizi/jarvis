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
import { noteListStyles } from "./DragableNoteList.style";

function DragableNoteList({
  noteList,
  isColumn = true,
  disabled = false,
}: {
  noteList: (Note & Id)[];
  isColumn?: boolean;
  disabled?: boolean;
}) {
  const { handleDragEnd } = useDnDNote();
  const { openNoteSplitModal } = useNoteSplitModal();
  const { container } = noteListStyles;

  return (
    <div css={container(isColumn)}>
      <SortableDndContext
        data={noteList || []}
        handleDragEnd={handleDragEnd}
        disabled={disabled}
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
