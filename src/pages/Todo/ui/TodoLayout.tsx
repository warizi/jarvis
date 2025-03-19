/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import { todoLayoutStyle } from "./TodoLayout.style";
import { Outlet } from "react-router-dom";
import { TodoSidebar } from "@widgets/todo";

function TodoLayout() {
  const { container, content } = todoLayoutStyle;
  return (
    <div css={container}>
      <SidebarWrapper>
        <TodoSidebar />
      </SidebarWrapper>
      <div css={content}>
        <Outlet />
      </div>
    </div>
  );
}

export default TodoLayout;
