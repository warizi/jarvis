/** @jsxImportSource @emotion/react */

import { useTodoCateInfo } from "../model/useTodoCateInfo";
import TodoHeader from "./TodoHeader";

function TodoCatePage() {
  const todoCate = useTodoCateInfo();

  return (
    <div>
      <TodoHeader title={todoCate?.name || ""} />
    </div>
  );
}

export default TodoCatePage;
