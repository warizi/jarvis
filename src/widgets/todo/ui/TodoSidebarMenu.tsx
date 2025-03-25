/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { TodoSidebarMenuStyle } from "./TodoSidebarMenu.style";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useTodoMenuCurrent } from "../model/useTodoMenuCurrent";
import {
  FolderIcon,
  StarIcon,
  SunIcon,
} from "@shared/components/icon";

function TodoSidebarMenu() {
  const { container, ul, li, a, span } =
    TodoSidebarMenuStyle;
  const isCurrent = useTodoMenuCurrent();

  return (
    <div css={container}>
      <ul css={ul}>
        <li css={li(isCurrent(ROUTE_URL.TODO_TODAY))}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_TODAY))}
            to={ROUTE_URL.TODO_TODAY}
            draggable={false}
          >
            <SunIcon size={20} color="#FF5954" />
            <span css={span}>Today</span>
          </Link>
        </li>
        <li css={li(isCurrent(ROUTE_URL.TODO_IMPORTANT))}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_IMPORTANT))}
            to={ROUTE_URL.TODO_IMPORTANT}
            draggable={false}
          >
            <StarIcon size={20} color="#FFDA36" />
            <span css={span}>중요</span>
          </Link>
        </li>
        <li css={li(isCurrent(ROUTE_URL.TODO_ALL))}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_ALL))}
            to={ROUTE_URL.TODO_ALL}
            draggable={false}
          >
            <FolderIcon size={20} />
            <span css={span}>전체</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TodoSidebarMenu;
