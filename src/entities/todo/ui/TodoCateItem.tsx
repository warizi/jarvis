/** @jsxImportSource @emotion/react */

import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../model/type";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { todoCateItemStyle } from "./TodoCateItem.style";

type TodoCateItemProps = {
  data: TodoCate & Id;
  isActive?: boolean;
};

function TodoCateItem({
  data,
  isActive,
}: TodoCateItemProps) {
  const { id, name } = data;
  const { li, link, span } = todoCateItemStyle;
  return (
    <li css={li(isActive || false)}>
      <Link to={ROUTE_URL.TODO + "/" + id} css={link}>
        <span css={span}>{name}</span>
      </Link>
    </li>
  );
}

export default TodoCateItem;
