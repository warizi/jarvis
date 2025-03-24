/** @jsxImportSource @emotion/react */

import { TodoCreateBtn } from "@features/todo";
import TodoHeader from "./TodoHeader";

function TodoPage() {
  return (
    <div>
      <TodoHeader title="오늘 할일" />
      <TodoCreateBtn cateId={undefined} isToday />
    </div>
  );
}

export default TodoPage;
