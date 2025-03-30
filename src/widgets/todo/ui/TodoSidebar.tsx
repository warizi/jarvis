/** @jsxImportSource @emotion/react */

import { SidebarTitle } from "@shared/components/sidebar";
import DraggableTodoCateList from "./DraggableTodoCateList";
import TodoSidebarMenu from "./TodoSidebarMenu";

function TodoSidebar() {
  return (
    <div>
      <SidebarTitle title="TODO" />
      <TodoSidebarMenu />
      <DraggableTodoCateList />
    </div>
  );
}

export default TodoSidebar;
