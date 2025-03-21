/** @jsxImportSource @emotion/react */

import {
  DraggableTodoCateList,
  // TodoCateCreateBtn,
  // TodoCateList,
} from "@features/todo";
import TodoSidebarMenu from "./TodoSidebarMenu";

function TodoSidebar() {
  return (
    <div>
      <TodoSidebarMenu />
      {/* <TodoCateList /> */}
      <DraggableTodoCateList />
      {/* <TodoCateCreateBtn /> */}
    </div>
  );
}

export default TodoSidebar;
