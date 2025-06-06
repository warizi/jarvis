/** @jsxImportSource @emotion/react */

import { NoteCate, NoteCateType } from "@entities/note";
import { Id } from "@shared/config/type/commonType";
import { useNoteCateItem } from "../model/useNoteCateItem";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { FolderIcon } from "@shared/components/icon";
import { SidebarItemWrapper } from "@shared/components/sidebar";

type NoteCateItemProps = {
  data: NoteCateType & Id;
  isActive?: boolean;
  onClick?: () => void;
};

function NoteCateItem({
  data,
  isActive,
  onClick,
}: NoteCateItemProps) {
  const { id } = data;

  const { openContextMenu, isEdit, register, onSubmit } =
    useNoteCateItem(data);

  return (
    <SidebarItemWrapper
      count={0}
      icon={<FolderIcon size={18} />}
      isCurrentLink={isActive}
      linkTo={
        onClick ? "#" : ROUTE_URL.NOTE_CATE + "/" + id
      }
      onContextMenu={openContextMenu}
      onClick={onClick}
    >
      <NoteCate
        isEdit={isEdit}
        onSubmit={onSubmit}
        {...register("name")}
      />
    </SidebarItemWrapper>
  );
}

export default NoteCateItem;
