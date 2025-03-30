/** @jsxImportSource @emotion/react */

import { useGetAllTodoCateQuery } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCateType } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { useTodoCateList } from "../model/useTodoCateList";
import TodoCateItem from "../../../features/todo/ui/TodoCateItem";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDTodoCate } from "../model/useDnDTodoCate";
import { SidebarListWrapper } from "@shared/components/sidebar";
import TodoCateCreateBtn from "../../../features/todo/ui/TodoCateCreateBtn";

function DraggableTodoCateList() {
  const { data } = useGetAllTodoCateQuery();
  const isCurrentLink = useTodoCateList();
  const { handleDragEnd } = useDnDTodoCate();

  return (
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
              />
            </DraggableWrapper>
          ))
        }
      </SortableDndContext>
    </SidebarListWrapper>
  );
}

export default DraggableTodoCateList;
