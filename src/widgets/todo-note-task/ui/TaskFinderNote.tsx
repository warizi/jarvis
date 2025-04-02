/** @jsxImportSource @emotion/react */

import { NoteCard } from "@features/note";
import { useTaskSplitModalStore } from "../model/useTaskSplitModalStore";
import { useGetAllNoteByCateIdQuery } from "@entities/note";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { useTheme } from "@emotion/react";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDNote } from "@features/note/model/useDnDNote";
import { useSplitModalStore } from "@shared/components/splitModal";
import { SplitModalType } from "@shared/components/splitModal/model/splitModalStore";

function TaskFinderNote() {
  const {
    finderTab: { sideTab },
  } = useTaskSplitModalStore();
  let cateId = Number(sideTab);
  if (typeof sideTab !== "number") {
    cateId = 0;
  }

  const { data: noteList } = useGetAllNoteByCateIdQuery(
    cateId || 0
  );
  const { handleDragEnd } = useDnDNote();
  const theme = useTheme();
  const { type, itemId } = useSplitModalStore();
  const { setCUrrentNote } = useTaskSplitModalStore();

  const isSameSplitItem = (id: number) => {
    if (type === SplitModalType.NOTE) {
      return itemId === id;
    }
    return false;
  };

  return (
    <div
      css={{
        display: "flex",
        padding: "10px",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "16px",
        width: "calc(100% - 240px)",
        // height: "100%",
        overflowY: "auto",
      }}
    >
      <SortableDndContext
        data={(noteList as (Note & Id)[]) || []}
        handleDragEnd={handleDragEnd}
      >
        {(item) =>
          item?.map((note) => (
            <DraggableWrapper key={note.id} id={note.id}>
              <div
                css={{
                  borderRadius: theme.radius.medium,
                  boxShadow: theme.shadow.medium,
                }}
              >
                <div
                  css={{
                    opacity: isSameSplitItem(note.id)
                      ? 0.5
                      : 1,
                  }}
                >
                  <NoteCard
                    key={note.id}
                    data={note as Note & Id}
                    onClick={() =>
                      isSameSplitItem(note.id)
                        ? null
                        : setCUrrentNote(note)
                    }
                  />
                </div>
              </div>
            </DraggableWrapper>
          ))
        }
      </SortableDndContext>
    </div>
  );
}

export default TaskFinderNote;
