/** @jsxImportSource @emotion/react */

import { TodoCreateBtn, TodoList } from "@features/todo";
import { useTodoCateInfo } from "../model/useTodoCateInfo";
import TodoHeader from "./TodoHeader";

function TodoCatePage() {
  const { data, id } = useTodoCateInfo();

  return (
    <div>
      <TodoHeader title={data?.name || ""} />
      <TodoCreateBtn cateId={id} />
      <TodoList cateId={id} />
    </div>
  );
}

export default TodoCatePage;
