/** @jsxImportSource @emotion/react */

import {
  NoteCateType,
  useGetAllNoteCateQuery,
} from "@entities/note";
import {
  NoteCateCreateBtn,
  NoteCateItem,
} from "@features/note";
import {
  SidebarListWrapper,
  SidebarTitle,
} from "@shared/components/sidebar";
import { Id } from "@shared/config/type/commonType";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDNoteCate } from "@widgets/note/model/useDnDNoteCate";
import { useTaskSplitModalStore } from "../model/useTaskSplitModalStore";

function TaskNoteSidebar() {
  const { handleDragEnd } = useDnDNoteCate();
  const { data } = useGetAllNoteCateQuery();
  const {
    finderTab: { sideTab },
    setFinderSideTab,
  } = useTaskSplitModalStore();
  return (
    <div
      css={{
        width: "200px",
        padding: "5px",
      }}
    >
      <SidebarTitle title="NOTE" />
      <SidebarListWrapper
        listTitle="폴더"
        bottom={<NoteCateCreateBtn />}
      >
        <SortableDndContext
          handleDragEnd={handleDragEnd}
          data={data || []}
        >
          {(items) =>
            items?.map((note: NoteCateType & Id) => (
              <DraggableWrapper key={note.id} id={note.id}>
                <NoteCateItem
                  key={note.id}
                  data={note}
                  isActive={sideTab === note.id}
                  onClick={() => setFinderSideTab(note.id)}
                />
              </DraggableWrapper>
            ))
          }
        </SortableDndContext>
      </SidebarListWrapper>
    </div>
  );
}

export default TaskNoteSidebar;
