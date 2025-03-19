/** @jsxImportSource @emotion/react */

import {
  TodoCateCreateBtn,
  TodoCateList,
} from "@features/todo";
import TodoSidebarMenu from "./TodoSideBarMenu";

function TodoSidebar() {
  return (
    <div>
      <TodoSidebarMenu />
      <TodoCateList />
      <TodoCateCreateBtn />
    </div>
  );
}

export default TodoSidebar;
