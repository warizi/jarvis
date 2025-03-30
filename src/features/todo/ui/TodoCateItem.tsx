/** @jsxImportSource @emotion/react */

import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../../../entities/todo/model/type";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { FileCheckIcon } from "@shared/components/icon";
import { useTodoCate } from "../model/useTodoCate";
import { useGetCountAllByCateIdQuery } from "../model/todoFetchHooks";
import { SidebarItemWrapper } from "@shared/components/sidebar";

type TodoCateItemProps = {
  data: TodoCate & Id;
  isActive?: boolean;
};

function TodoCateItem({
  data,
  isActive,
}: TodoCateItemProps) {
  const { id, name } = data;
  const { openContextMenu, isEdit, register, onSubmit } =
    useTodoCate(data);
  const { data: cateCount } =
    useGetCountAllByCateIdQuery(id);

  return (
    <SidebarItemWrapper
      count={cateCount}
      icon={<FileCheckIcon size={18} />}
      isEdit={isEdit}
      onSubmit={onSubmit}
      isCurrentLink={isActive}
      linkTo={ROUTE_URL.TODO_CATE + "/" + id}
      onContextMenu={openContextMenu}
      text={name}
      {...register("name")}
    />
  );
}

export default TodoCateItem;
