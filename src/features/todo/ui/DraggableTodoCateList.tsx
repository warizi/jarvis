/** @jsxImportSource @emotion/react */

import { useGetAllTodoCateQuery } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCate } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { todoCateListStyle } from "./TodoCateList.style";
import { useTodoCateList } from "../model/useTodoCateList";
import TodoCateItem from "./TodoCateItem";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import TodoCateCreateBtn from "./TodoCateCreateBtn";
import { useDnDTodoCate } from "../model/useDnDTodoCate";

function DraggableTodoCateList() {
  const { data } = useGetAllTodoCateQuery();
  const { ul, container } = todoCateListStyle;
  const isCurrentLink = useTodoCateList();
  const { handleDragEnd } = useDnDTodoCate();

  return (
    <div css={container}>
      <ul css={ul}>
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
      </ul>
      <TodoCateCreateBtn />
    </div>
  );
}

export default DraggableTodoCateList;
