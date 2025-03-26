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
  const isNotDoneList = todoList?.filter(
    (todo) => !todo.isDone
  );
  const isDoneList = todoList?.filter(
    (todo) => todo.isDone
  );

  return (
    <div css={container}>
      {isNotDoneList?.map((todo) => {
        return <TodoItem key={todo.id} data={todo} />;
      })}
      {isDoneList?.map((todo) => {
        return <TodoItem key={todo.id} data={todo} />;
      })}
    </div>
  );
}

export default TodoList;
