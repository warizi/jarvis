/** @jsxImportSource @emotion/react */

import {
  TodoCreateBtn,
  TodoList,
  useGetAllByIsTodayQuery,
} from "@features/todo";
import TodoHeader from "./TodoHeader";

function TodoTodayPage() {
  const { data } = useGetAllByIsTodayQuery();
  return (
    <div>
      <TodoHeader title="오늘 할일" />
      <TodoCreateBtn cateId={undefined} isToday />
      <TodoList todoList={data || []} />
    </div>
  );
}

export default TodoTodayPage;
