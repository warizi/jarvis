/** @jsxImportSource @emotion/react */

import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../../../entities/todo/model/type";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { todoCateItemStyle } from "./TodoCateItem.style";
import { FileCheckIcon } from "@shared/components/icon";
import { useTodoCate } from "../model/useTodoCate";

type TodoCateItemProps = {
  data: TodoCate & Id;
  isActive?: boolean;
};

function TodoCateItem({
  data,
  isActive,
}: TodoCateItemProps) {
  const { id, name } = data;
  const { li, link, span, input } = todoCateItemStyle;

  const {
    openContextMenu,
    isEdit,
    register,
    onSubmit,
    inputRef,
    handleKeyDown,
  } = useTodoCate(data);

  return (
    <li
      css={li(isActive || false)}
      onContextMenu={openContextMenu}
    >
      <Link
        to={ROUTE_URL.TODO_CATE + "/" + id}
        css={link(isActive || false)}
        draggable={false}
      >
        <FileCheckIcon size={20} />
        {isEdit ? (
          <input
            draggable={false}
            ref={inputRef}
            type="text"
            css={input(isActive || false)}
            {...register("name")}
            onKeyDown={handleKeyDown}
            onBlur={onSubmit}
          />
        ) : (
          <span css={span}>{name}</span>
        )}
      </Link>
    </li>
  );
}

export default TodoCateItem;
