/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { TodoSidebarMenuStyle } from "./TodoSidebarMenu.style";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useTodoMenuCurrent } from "../model/useTodoMenuCurrent";
import { StarIcon, SunIcon } from "@shared/components/icon";

function TodoSidebarMenu() {
  const { container, ul, li, a, span } =
    TodoSidebarMenuStyle;
  const isCurrent = useTodoMenuCurrent();

  return (
    <div css={container}>
      <ul css={ul}>
        <li css={li(isCurrent(ROUTE_URL.TODO_TODAY))}>
          <Link css={a} to={ROUTE_URL.TODO_TODAY}>
            <SunIcon size={20} />
            <span css={span}>Today</span>
          </Link>
        </li>
        <li css={li(isCurrent(ROUTE_URL.TODO_IMPORTANT))}>
          <Link css={a} to={ROUTE_URL.TODO_IMPORTANT}>
            <StarIcon size={20} />
            <span css={span}>중요</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TodoSidebarMenu;
