/** @jsxImportSource @emotion/react */

import {
  TodoCreateBtn,
  TodoList,
  useGetAllByImportantAndIsDoneQuery,
  useGetAllByImportantQuery,
  useTodoFilter,
} from "@features/todo";
import TodoHeader from "./TodoHeader";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoImportantPage() {
  const { data } = useGetAllByImportantQuery();
  const { data: doneList } =
    useGetAllByImportantAndIsDoneQuery();
  const { getFilteredTodoList } = useTodoFilter();
  return (
    <div>
      <TodoHeader title="중요 Todo" />
      <TodoCreateBtn cateId={undefined} isImportant />
      <ToggleListWrapper title="TODO">
        <TodoList
          todoList={getFilteredTodoList(data || [])}
        />
      </ToggleListWrapper>
      <ToggleListWrapper title="DONE" defaultOpen={false}>
        <TodoList
          todoList={getFilteredTodoList(doneList || [])}
        />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoImportantPage;
