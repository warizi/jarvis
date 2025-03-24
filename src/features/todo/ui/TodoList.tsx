/** @jsxImportSource @emotion/react */

import { todoListStyles } from "./TodoList.style";
import TodoItem from "./TodoItem";
import { useGetAllByCateIdQuery } from "../model/todoFetchHooks";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDTodo } from "../model/useDnDTodo";

function TodoList({ cateId }: { cateId: number }) {
  const { container } = todoListStyles;
  const { data } = useGetAllByCateIdQuery(cateId);
  const { handleDragEnd } = useDnDTodo();

  return (
    <div css={container}>
      <SortableDndContext
        data={data || []}
        handleDragEnd={handleDragEnd}
      >
        {(item) =>
          item?.map((todo) => (
            <DraggableWrapper key={todo.id} id={todo.id}>
              <TodoItem key={todo.id} data={todo} />
            </DraggableWrapper>
          ))
        }
      </SortableDndContext>
    </div>
  );
}

export default TodoList;
