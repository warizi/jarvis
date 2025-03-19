/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { TodoSidebarMenuStyle } from "./TodoSidebarMenu.style";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useTodoMenuCurrent } from "../model/useTodoMenuCurrent";

function TodoSidebarMenu() {
  const { container, ul, li, a } = TodoSidebarMenuStyle;
  const isCurrent = useTodoMenuCurrent();

  return (
    <div css={container}>
      <ul css={ul}>
        <li css={li}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_TODAY))}
            to={ROUTE_URL.TODO_TODAY}
          >
            Today
          </Link>
        </li>
        <li>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_IMPORTANT))}
            to={ROUTE_URL.TODO_IMPORTANT}
          >
            중요
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TodoSidebarMenu;
