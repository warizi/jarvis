/** @jsxImportSource @emotion/react */

import { TodoLabel } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { todoLabelItemStyles } from "./TodoLabelItem.style";
import { useTodoLabelContextMenu } from "../model/useTodoLabelContextMenu";
function TodoLabelItem({
  data,
  onClick,
}: {
  data: TodoLabel & Id;
  onClick?: (data: (TodoLabel & Id) | undefined) => void;
}) {
  const { container } = todoLabelItemStyles;
  const { name, color, id } = data;
  const { openContextMenu } = useTodoLabelContextMenu(id);

  return (
    <div
      css={container(color)}
      onClick={() => {
        if (onClick) {
          onClick(data);
        }
      }}
      onContextMenu={openContextMenu}
    >
      {/* <div css={label(color)} /> */}
      <span>{name}</span>
    </div>
  );
}

export default TodoLabelItem;
