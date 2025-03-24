/** @jsxImportSource @emotion/react */

import { TodoCreateBtn, TodoList } from "@features/todo";
import TodoHeader from "./TodoHeader";
import { useGetAllByImportantQuery } from "@features/todo/model/useGetAllByImportantQuery";

function TodoImportantPage() {
  const { data } = useGetAllByImportantQuery();
  return (
    <div>
      <TodoHeader title="중요 Todo" />
      <TodoCreateBtn cateId={undefined} />
      <TodoList todoList={data || []} />
    </div>
  );
}

export default TodoImportantPage;
