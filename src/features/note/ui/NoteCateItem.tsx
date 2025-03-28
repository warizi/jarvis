/** @jsxImportSource @emotion/react */

import { NoteCate } from "@entities/note";
import { Id } from "@shared/config/type/commonType";
import { noteCateItemStyles } from "./NoteCateItem.style";
import { useNoteCateItem } from "../model/useNoteCateItem";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { FolderIcon } from "@shared/components/icon";

type NoteCateItemProps = {
  data: NoteCate & Id;
  isActive?: boolean;
};

function NoteCateItem({
  data,
  isActive,
}: NoteCateItemProps) {
  const { id, name } = data;
  const { li, link, span, input, innerContainer } =
    noteCateItemStyles;

  const {
    openContextMenu,
    isEdit,
    register,
    onSubmit,
    inputRef,
    handleKeyDown,
  } = useNoteCateItem(data);

  return (
    <li
      css={li(isActive || false)}
      onContextMenu={openContextMenu}
    >
      <Link
        to={ROUTE_URL.NOTE_CATE + "/" + id}
        css={link(isActive || false)}
        draggable={false}
      >
        <div css={innerContainer}>
          <FolderIcon size={20} />
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
      </Link>
    </li>
  );
}

export default NoteCateItem;
