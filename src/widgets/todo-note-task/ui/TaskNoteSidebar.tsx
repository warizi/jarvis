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
  SidebarItemWrapper,
  SidebarListWrapper,
  SidebarTitle,
} from "@shared/components/sidebar";
import { Id } from "@shared/config/type/commonType";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDNoteCate } from "@widgets/note/model/useDnDNoteCate";
import {
  TASK_FINDER_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import {
  StarIcon,
  StopWatchIcon,
} from "@shared/components/icon";

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
      <SidebarListWrapper listTitle="모아보기">
        <SidebarItemWrapper
          icon={<StarIcon size={18} />}
          isCurrentLink={
            sideTab === TASK_FINDER_TAB.Important
          }
          onClick={() =>
            setFinderSideTab(TASK_FINDER_TAB.Important)
          }
          linkTo="#"
        >
          <span>중요</span>
        </SidebarItemWrapper>
        <SidebarItemWrapper
          icon={<StopWatchIcon size={18} />}
          isCurrentLink={sideTab === TASK_FINDER_TAB.Recent}
          onClick={() =>
            setFinderSideTab(TASK_FINDER_TAB.Recent)
          }
          linkTo="#"
        >
          <span>최근</span>
        </SidebarItemWrapper>
      </SidebarListWrapper>
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
