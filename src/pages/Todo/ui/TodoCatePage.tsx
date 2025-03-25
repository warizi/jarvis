/** @jsxImportSource @emotion/react */

import {
  DraggableTodoList,
  TodoCreateBtn,
} from "@features/todo";
import { useTodoCateInfo } from "../model/useTodoCateInfo";
import TodoHeader from "./TodoHeader";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { ToggleListWrapper } from "@shared/components/togglelist";

function TodoCatePage() {
  const { data, id, todoList } = useTodoCateInfo();
  return (
    <div>
      <TodoHeader title={data?.name || ""} />
      <TodoCreateBtn cateId={id} />
      <ToggleListWrapper title="TODO">
        <DraggableTodoList
          todoList={todoList as (Todo & Id)[]}
        />
      </ToggleListWrapper>
    </div>
  );
}

export default TodoCatePage;
