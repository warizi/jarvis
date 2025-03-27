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
import { CountAlert } from "@shared/components/alert";
import {
  useGetCountAllByImportantQuery,
  useGetCountAllByIsTodayQuery,
  useGetCountAllTodoQuery,
} from "@features/todo";

function TodoSidebarMenu() {
  const { container, ul, li, a, span, innerContainer } =
    TodoSidebarMenuStyle;
  const isCurrent = useTodoMenuCurrent();
  const { data: allCount } = useGetCountAllTodoQuery();
  const { data: todayCount } =
    useGetCountAllByIsTodayQuery();
  const { data: importantCount } =
    useGetCountAllByImportantQuery();

  return (
    <div css={container}>
      <ul css={ul}>
        <li css={li(isCurrent(ROUTE_URL.TODO_TODAY))}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_TODAY))}
            to={ROUTE_URL.TODO_TODAY}
            draggable={false}
          >
            <div css={innerContainer}>
              <SunIcon size={20} color="#FF5954" />
              <span css={span}>Today</span>
            </div>
            {todayCount ? (
              <CountAlert count={todayCount} size={18} />
            ) : null}
          </Link>
        </li>
        <li css={li(isCurrent(ROUTE_URL.TODO_IMPORTANT))}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_IMPORTANT))}
            to={ROUTE_URL.TODO_IMPORTANT}
            draggable={false}
          >
            <div css={innerContainer}>
              <StarIcon size={20} color="#FFDA36" />
              <span css={span}>중요</span>
            </div>
            {importantCount ? (
              <CountAlert
                count={importantCount}
                size={18}
              />
            ) : null}
          </Link>
        </li>
        <li css={li(isCurrent(ROUTE_URL.TODO_ALL))}>
          <Link
            css={a(isCurrent(ROUTE_URL.TODO_ALL))}
            to={ROUTE_URL.TODO_ALL}
            draggable={false}
          >
            <div css={innerContainer}>
              <FolderIcon size={20} />
              <span css={span}>전체</span>
            </div>
            {allCount ? (
              <CountAlert count={allCount} size={18} />
            ) : null}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TodoSidebarMenu;
