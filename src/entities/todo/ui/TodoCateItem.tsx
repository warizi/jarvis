/** @jsxImportSource @emotion/react */

import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../model/type";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { todoCateItemStyle } from "./TodoCateItem.style";
import { FileCheckIcon } from "@shared/components/icon";
import { useTodoCateContextMenu } from "../model/useTodoCateContextMenu";

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
  const { handleOpen } = useTodoCateContextMenu();
  return (
    <li
      css={li(isActive || false)}
      onContextMenu={handleOpen}
    >
      <Link to={ROUTE_URL.TODO_CATE + "/" + id} css={link}>
        <FileCheckIcon size={20} />
        <span css={span}>{name}</span>
      </Link>
    </li>
  );
}

export default TodoCateItem;
