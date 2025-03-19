/** @jsxImportSource @emotion/react */

import {
  TodoCateCreateBtn,
  TodoCateList,
} from "@features/todo";

function TodoSidebar() {
  return (
    <div>
      <TodoCateList />
      <TodoCateCreateBtn />
    </div>
  );
}

export default TodoSidebar;
