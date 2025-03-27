/** @jsxImportSource @emotion/react */

import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../../../entities/todo/model/type";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { todoCateItemStyle } from "./TodoCateItem.style";
import { FileCheckIcon } from "@shared/components/icon";
import { useTodoCate } from "../model/useTodoCate";
import { CountAlert } from "@shared/components/alert";
import { useGetCountAllByCateIdQuery } from "../model/todoFetchHooks";

type TodoCateItemProps = {
  data: TodoCate & Id;
  isActive?: boolean;
};

function TodoCateItem({
  data,
  isActive,
}: TodoCateItemProps) {
  const { id, name } = data;
  const { li, link, span, input, innerContainer } =
    todoCateItemStyle;

  const {
    openContextMenu,
    isEdit,
    register,
    onSubmit,
    inputRef,
    handleKeyDown,
  } = useTodoCate(data);
  const { data: cateCount } =
    useGetCountAllByCateIdQuery(id);

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
        <div css={innerContainer}>
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
        </div>
        {cateCount ? (
          <CountAlert count={cateCount} size={18} />
        ) : null}
      </Link>
    </li>
  );
}

export default TodoCateItem;
