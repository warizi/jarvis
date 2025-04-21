/** @jsxImportSource @emotion/react */

import {
  TodoCreateBtn,
  TodoList,
  useGetAllByIsTodayQuery,
  useGetAllTodayByStartDateAndEndDateQuery,
  useTodoFilter,
} from "@features/todo";
import TodoHeader from "./TodoHeader";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoTodayPage() {
  const { data } = useGetAllByIsTodayQuery();
  const { data: periodToday } =
    useGetAllTodayByStartDateAndEndDateQuery();

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
        <ToggleListWrapper title="오늘 할일">
          <TodoList
            todoList={getFilteredTodoList(data || [])}
          />
        </ToggleListWrapper>
        <ToggleListWrapper title="기간 할일">
          <TodoList
            todoList={getFilteredTodoList(
              periodToday || []
            )}
          />
        </ToggleListWrapper>
      </div>
    </div>
  );
}

export default TodoTodayPage;
