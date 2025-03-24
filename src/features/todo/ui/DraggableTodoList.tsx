/** @jsxImportSource @emotion/react */

import { todoListStyles } from "./TodoList.style";
import TodoItem from "./TodoItem";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDTodo } from "../model/useDnDTodo";
import { Id } from "@shared/config/type/commonType";
import { Todo } from "@entities/todo/model/type";

function DraggableTodoList({
  todoList,
}: {
  todoList: (Todo & Id)[];
}) {
  const { container } = todoListStyles;
  const { handleDragEnd } = useDnDTodo();

  return (
    <div css={container}>
      <SortableDndContext
        data={todoList || []}
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

export default DraggableTodoList;
