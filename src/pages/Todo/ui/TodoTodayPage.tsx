/** @jsxImportSource @emotion/react */

import {
  TodoCreateBtn,
  TodoList,
  useGetAllByIsTodayQuery,
} from "@features/todo";
import TodoHeader from "./TodoHeader";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoTodayPage() {
  const { data } = useGetAllByIsTodayQuery();
  return (
    <div>
      <TodoHeader title="오늘 할일" />
      <TodoCreateBtn cateId={undefined} isToday />
      <ToggleListWrapper title="TODO">
        <TodoList todoList={data || []} />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoTodayPage;
