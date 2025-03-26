/** @jsxImportSource @emotion/react */

import {
  DraggableTodoList,
  TodoCreateBtn,
  TodoList,
  useTodoFilter,
} from "@features/todo";
import { useTodoCateInfo } from "../model/useTodoCateInfo";
import TodoHeader from "./TodoHeader";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoCatePage() {
  const { data, id, todoList, doneList } =
    useTodoCateInfo();
  const { getFilteredTodoList } = useTodoFilter();
  return (
    <div>
      <TodoHeader title={data?.name || ""} />
      <TodoCreateBtn cateId={id} />
      <ToggleListWrapper title="TODO">
        <DraggableTodoList
          todoList={
            getFilteredTodoList(
              todoList as (Todo & Id)[]
            ) || []
          }
        />
      </ToggleListWrapper>
      <ToggleListWrapper title="DONE" defaultOpen={false}>
        <TodoList
          todoList={
            getFilteredTodoList(
              doneList as (Todo & Id)[]
            ) || []
          }
        />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoCatePage;
