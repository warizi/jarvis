/** @jsxImportSource @emotion/react */

import { todoListStyles } from "./TodoList.style";
import TodoItem from "./TodoItem";
import { Id } from "@shared/config/type/commonType";
import { Todo } from "@entities/todo/model/type";

function TodoList({
  todoList,
}: {
  todoList: (Todo & Id)[];
}) {
  const { container } = todoListStyles;

  return (
    <div css={container}>
      {todoList?.map((todo) => {
        return <TodoItem key={todo.id} data={todo} />;
      })}
    </div>
  );
}

export default TodoList;
