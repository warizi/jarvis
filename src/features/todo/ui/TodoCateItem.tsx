/** @jsxImportSource @emotion/react */

import { Id } from "@shared/config/type/commonType";
import { TodoCateType } from "../../../entities/todo/model/type";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { FileCheckIcon } from "@shared/components/icon";
import { useGetCountAllByCateIdQuery } from "../model/todoFetchHooks";
import { SidebarItemWrapper } from "@shared/components/sidebar";
import { TodoCate } from "@entities/todo";
import { useTodoCate } from "../model/useTodoCate";

type TodoCateItemProps = {
  data: TodoCateType & Id;
  isActive?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
};

function TodoCateItem({
  data,
  isActive,
  onClick,
}: TodoCateItemProps) {
  const { id } = data;
  const { openContextMenu, isEdit, register, onSubmit } =
    useTodoCate(data);
  const { data: cateCount } =
    useGetCountAllByCateIdQuery(id);

  return (
    <SidebarItemWrapper
      count={cateCount}
      icon={<FileCheckIcon size={18} />}
      isCurrentLink={isActive}
      linkTo={
        onClick ? "#" : ROUTE_URL.TODO_CATE + "/" + id
      }
      onClick={onClick}
      onContextMenu={openContextMenu}
    >
      <TodoCate
        isEdit={isEdit}
        onSubmit={onSubmit}
        {...register("name")}
      />
    </SidebarItemWrapper>
  );
}

export default TodoCateItem;
