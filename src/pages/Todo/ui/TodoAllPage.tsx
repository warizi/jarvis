/** @jsxImportSource @emotion/react */

import { useGetAllTodoQuery } from "@entities/todo";
import TodoHeader from "./TodoHeader";
import { ToggleListWrapper } from "@shared/components/togglelist";
import {
  TodoList,
  useGetAllByIsDoneQuery,
} from "@features/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";

function TodoAllPage() {
  const { data } = useGetAllTodoQuery();
  const { data: doneList } = useGetAllByIsDoneQuery();
  return (
    <div>
      <TodoHeader title="모든 할 일" />
      <ToggleListWrapper title="TODO">
        <TodoList todoList={data as (Todo & Id)[]} />
      </ToggleListWrapper>
      <ToggleListWrapper title="DONE" defaultOpen={false}>
        <TodoList todoList={doneList as (Todo & Id)[]} />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoAllPage;
