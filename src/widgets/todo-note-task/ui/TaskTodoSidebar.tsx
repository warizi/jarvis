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
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useTodoMenuCurrent } from "@widgets/note/model/useTodoMenuCurrent";
import { useDnDTodoCate } from "@widgets/todo/model/useDnDTodoCate";
import { useTodoCateList } from "@widgets/todo/model/useTodoCateList";

function TaskTodoSidebar() {
  const isCurrent = useTodoMenuCurrent();
  const { data: allCount } = useGetCountAllTodoQuery();
  const { data: todayCount } =
    useGetCountAllByIsTodayQuery();
  const { data: importantCount } =
    useGetCountAllByImportantQuery();

  const { data } = useGetAllTodoCateQuery();
  const isCurrentLink = useTodoCateList();
  const { handleDragEnd } = useDnDTodoCate();
  return (
    <div
      css={{
        width: "200px",
        padding: "5px",
      }}
    >
      <SidebarTitle title="TODO" />
      <SidebarListWrapper listTitle="모아보기">
        <SidebarItemWrapper
          count={todayCount}
          icon={<SunIcon size={18} />}
          isCurrentLink={isCurrent(ROUTE_URL.TODO_TODAY)}
          onClick={() => {}}
          linkTo={"#"}
        >
          <span>오늘</span>
        </SidebarItemWrapper>
        <SidebarItemWrapper
          count={importantCount}
          icon={<StarIcon size={18} />}
          isCurrentLink={isCurrent(
            ROUTE_URL.TODO_IMPORTANT
          )}
          linkTo={"#"}
        >
          <span>중요</span>
        </SidebarItemWrapper>
        <SidebarItemWrapper
          count={allCount}
          icon={<FolderIcon size={18} />}
          isCurrentLink={isCurrent(ROUTE_URL.TODO_ALL)}
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
                  isActive={isCurrentLink(todo)}
                  onClick={() => {}}
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
