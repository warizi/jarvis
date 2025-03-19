/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { TodoSidebarMenuStyle } from "./TodoSidebarMenu.style";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";

function TodoSidebarMenu() {
  const { container, ul } = TodoSidebarMenuStyle;

  return (
    <div css={container}>
      <ul css={ul}>
        <li>
          <Link to={ROUTE_URL.TODO_TODAY}>Today</Link>
        </li>
        <li>
          <Link to={ROUTE_URL.TODO_IMPORTANT}>중요</Link>
        </li>
      </ul>
    </div>
  );
}

export default TodoSidebarMenu;
