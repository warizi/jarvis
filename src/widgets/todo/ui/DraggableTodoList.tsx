/** @jsxImportSource @emotion/react */

import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { useDnDTodo } from "../model/useDnDTodo";
import { Id } from "@shared/config/type/commonType";
import { Todo } from "@entities/todo/model/type";
import {
  TodoItem,
  useTodoSplitModal,
} from "@features/todo";

const todoListStyles = {
  container: () =>
    ({
      display: "flex",
      flexDirection: "column",
      // gap: "5px",
      // padding: "10px",
      overflow: "hidden",
    } as const),
};

function DraggableTodoList({
  todoList,
}: {
  todoList: (Todo & Id)[];
}) {
  const { container } = todoListStyles;
  const { handleDragEnd } = useDnDTodo();
  const { openTodoSplitModal } = useTodoSplitModal();
  return (
    <div css={container}>
      <SortableDndContext
        data={todoList || []}
        handleDragEnd={handleDragEnd}
      >
        {(item) =>
          item?.map((todo) => {
            return (
              <DraggableWrapper key={todo.id} id={todo.id}>
                <TodoItem
                  key={todo.id}
                  data={todo}
                  onClick={openTodoSplitModal(todo)}
                />
              </DraggableWrapper>
            );
          })
        }
      </SortableDndContext>
    </div>
  );
}

export default DraggableTodoList;
