/** @jsxImportSource @emotion/react */

import { useGetAllTodoQuery } from "@entities/todo";
import TodoHeader from "./TodoHeader";
import { ToggleListWrapper } from "@shared/components/togglelist";
import {
  TodoList,
  useGetAllByIsDoneQuery,
  useTodoFilter,
} from "@features/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";

function TodoAllPage() {
  const { data } = useGetAllTodoQuery();
  const { data: doneList } = useGetAllByIsDoneQuery();
  const { getFilteredTodoList } = useTodoFilter();
  return (
    <div>
      <TodoHeader title="모든 할 일" />

      <div
        css={{
          padding: "0 16px",
        }}
      >
        <ToggleListWrapper title="TODO">
          <TodoList
            todoList={getFilteredTodoList(
              (data as (Todo & Id)[]) || []
            )}
          />
        </ToggleListWrapper>
        <ToggleListWrapper title="DONE" defaultOpen={false}>
          <TodoList
            todoList={getFilteredTodoList(
              (doneList as (Todo & Id)[]) || []
            )}
          />
        </ToggleListWrapper>
      </div>
    </div>
  );
}

export default TodoAllPage;
