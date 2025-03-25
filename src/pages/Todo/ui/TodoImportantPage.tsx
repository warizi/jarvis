/** @jsxImportSource @emotion/react */

import { TodoCreateBtn, TodoList } from "@features/todo";
import TodoHeader from "./TodoHeader";
import { useGetAllByImportantQuery } from "@features/todo/model/useGetAllByImportantQuery";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoImportantPage() {
  const { data } = useGetAllByImportantQuery();
  return (
    <div>
      <TodoHeader title="중요 Todo" />
      <TodoCreateBtn cateId={undefined} isImportant />
      <ToggleListWrapper title="TODO">
        <TodoList todoList={data || []} />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoImportantPage;
