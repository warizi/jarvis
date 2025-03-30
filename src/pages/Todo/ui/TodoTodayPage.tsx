/** @jsxImportSource @emotion/react */

import {
  TodoCreateBtn,
  TodoList,
  useGetAllByIsTodayQuery,
  useTodoFilter,
} from "@features/todo";
import TodoHeader from "./TodoHeader";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoTodayPage() {
  const { data } = useGetAllByIsTodayQuery();
  const { getFilteredTodoList } = useTodoFilter();
  return (
    <div>
      <TodoHeader title="오늘 할일" />
      <TodoCreateBtn cateId={undefined} isToday />

      <div
        css={{
          padding: "0 16px",
        }}
      >
        <ToggleListWrapper title="TODO">
          <TodoList
            todoList={getFilteredTodoList(data || [])}
          />
        </ToggleListWrapper>
      </div>
    </div>
  );
}

export default TodoTodayPage;
