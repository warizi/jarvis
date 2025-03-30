/** @jsxImportSource @emotion/react */

import DraggableTodoCateList from "./DraggableTodoCateList";
import TodoSidebarMenu from "./TodoSidebarMenu";

function TodoSidebar() {
  return (
    <div>
      <TodoSidebarMenu />
      <DraggableTodoCateList />
    </div>
  );
}

export default TodoSidebar;
