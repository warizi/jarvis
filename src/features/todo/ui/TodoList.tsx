/** @jsxImportSource @emotion/react */

import { todoListStyles } from "./TodoList.style";
import TodoItem from "./TodoItem";
import { useGetAllByCateIdQuery } from "../model/todoFetchHooks";

function TodoList({ cateId }: { cateId: number }) {
  const { container } = todoListStyles;
  const { data } = useGetAllByCateIdQuery(cateId);

  return (
    <div css={container}>
      {data?.map((todo) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </div>
  );
}

export default TodoList;
