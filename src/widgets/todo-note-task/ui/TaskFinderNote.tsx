/** @jsxImportSource @emotion/react */

import { NoteCard, NoteCreateBtn } from "@features/note";
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
        width: "calc(100% - 240px)",
        backgroundColor: theme.colors.background.gray,
        borderRadius: theme.radius.medium,
        overflow: "hidden",
      }}
    >
      <div>
        {sideTab !== 0 && typeof sideTab === "number" && (
          <NoteCreateBtn cateId={sideTab} />
        )}
      </div>
      <div
        css={{
          height: "100%",
          overflowY: "auto",
        }}
      >
        <div
          css={{
            display: "grid",
            padding: "10px",
            gap: "16px",
            width: "100%",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(180px, 1fr))",
          }}
        >
          <SortableDndContext
            data={(noteList as (Note & Id)[]) || []}
            handleDragEnd={handleDragEnd}
          >
            {(item) =>
              item?.length > 0 &&
              item?.map((note) => (
                <DraggableWrapper
                  key={note.id}
                  id={note.id}
                  css={{
                    maxWidth: 350,
                    minWidth: 180,
                  }}
                >
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
      </div>
    </div>
  );
}

export default TaskFinderNote;
