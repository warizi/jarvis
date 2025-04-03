/** @jsxImportSource @emotion/react */

import { useGetAllTodoCateQuery } from "@entities/todo";
import { TodoCateType } from "@entities/todo/model/type";
import {
  TodoCateCreateBtn,
  useGetCountAllByImportantQuery,
  useGetCountAllByIsTodayQuery,
  useGetCountAllTodoQuery,
} from "@features/todo";
import TodoCateItem from "@features/todo/ui/TodoCateItem";
import {
  FolderIcon,
  StarIcon,
  SunIcon,
} from "@shared/components/icon";
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
import { useDnDTodoCate } from "@widgets/todo/model/useDnDTodoCate";
import {
  TASK_FINDER_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";

function TaskTodoSidebar() {
  const { data: allCount } = useGetCountAllTodoQuery();
  const { data: todayCount } =
    useGetCountAllByIsTodayQuery();
  const { data: importantCount } =
    useGetCountAllByImportantQuery();

  const { data } = useGetAllTodoCateQuery();
  const { handleDragEnd } = useDnDTodoCate();

  const {
    finderTab: { sideTab },
    setFinderSideTab,
  } = useTaskSplitModalStore();
  return (
    <div
      css={{
        width: "200px",
        padding: "5px 0",
      }}
    >
      <SidebarTitle title="TODO" />
      <SidebarListWrapper listTitle="모아보기">
        <SidebarItemWrapper
          count={todayCount}
          icon={<SunIcon size={18} />}
          isCurrentLink={sideTab === TASK_FINDER_TAB.TODAY}
          onClick={() =>
            setFinderSideTab(TASK_FINDER_TAB.TODAY)
          }
          linkTo={"#"}
        >
          <span>오늘</span>
        </SidebarItemWrapper>
        <SidebarItemWrapper
          count={importantCount}
          icon={<StarIcon size={18} />}
          isCurrentLink={
            sideTab === TASK_FINDER_TAB.Important
          }
          onClick={() =>
            setFinderSideTab(TASK_FINDER_TAB.Important)
          }
          linkTo={"#"}
        >
          <span>중요</span>
        </SidebarItemWrapper>
        <SidebarItemWrapper
          count={allCount}
          icon={<FolderIcon size={18} />}
          isCurrentLink={sideTab === TASK_FINDER_TAB.All}
          onClick={() =>
            setFinderSideTab(TASK_FINDER_TAB.All)
          }
          linkTo={"#"}
        >
          <span>전체</span>
        </SidebarItemWrapper>
      </SidebarListWrapper>
      <SidebarListWrapper
        listTitle="카테고리"
        bottom={<TodoCateCreateBtn />}
      >
        <SortableDndContext
          handleDragEnd={handleDragEnd}
          data={data || []}
        >
          {(items) =>
            items?.map((todo: TodoCateType & Id) => (
              <DraggableWrapper key={todo.id} id={todo.id}>
                <TodoCateItem
                  key={todo.id}
                  data={todo}
                  isActive={sideTab === todo.id}
                  onClick={() => setFinderSideTab(todo.id)}
                />
              </DraggableWrapper>
            ))
          }
        </SortableDndContext>
      </SidebarListWrapper>
    </div>
  );
}

export default TaskTodoSidebar;
