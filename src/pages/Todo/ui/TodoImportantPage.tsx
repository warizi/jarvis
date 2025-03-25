/** @jsxImportSource @emotion/react */

import {
  TodoCreateBtn,
  TodoList,
  useGetAllByImportantAndIsDoneQuery,
} from "@features/todo";
import TodoHeader from "./TodoHeader";
import { useGetAllByImportantQuery } from "@features/todo/model/useGetAllByImportantQuery";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoImportantPage() {
  const { data } = useGetAllByImportantQuery();
  const { data: doneList } =
    useGetAllByImportantAndIsDoneQuery();
  return (
    <div>
      <TodoHeader title="중요 Todo" />
      <TodoCreateBtn cateId={undefined} isImportant />
      <ToggleListWrapper title="TODO">
        <TodoList todoList={data || []} />
      </ToggleListWrapper>
      <ToggleListWrapper title="DONE" defaultOpen={false}>
        <TodoList todoList={doneList || []} />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoImportantPage;
