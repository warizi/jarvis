/** @jsxImportSource @emotion/react */

import { useGetAllTodoCateQuery } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCate } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { useTodoCateList } from "../model/useTodoCateList";
import TodoCateItem from "./TodoCateItem";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDTodoCate } from "../model/useDnDTodoCate";
import { SidebarListWrapper } from "@shared/components/sidebar";
import TodoCateCreateBtn from "./TodoCateCreateBtn";

function DraggableTodoCateList() {
  const { data } = useGetAllTodoCateQuery();
  const isCurrentLink = useTodoCateList();
  const { handleDragEnd } = useDnDTodoCate();

  return (
    <SidebarListWrapper
      listTitle="Categories"
      bottom={<TodoCateCreateBtn />}
    >
      <SortableDndContext
        handleDragEnd={handleDragEnd}
        data={data || []}
      >
        {(items) =>
          items?.map((todo: TodoCate & Id) => (
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
