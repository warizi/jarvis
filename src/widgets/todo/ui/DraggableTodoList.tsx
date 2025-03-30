/** @jsxImportSource @emotion/react */

import TodoItem from "../../../features/todo/ui/TodoItem";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDTodo } from "../model/useDnDTodo";
import { Id } from "@shared/config/type/commonType";
import { Todo } from "@entities/todo/model/type";

const todoListStyles = {
  container: () =>
    ({
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "10px",
    } as const),
};

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
