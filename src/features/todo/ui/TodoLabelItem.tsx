/** @jsxImportSource @emotion/react */

import { TodoLabel } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { todoLabelItemStyles } from "./TodoLabelItem.style";
import { TrashIcon } from "@shared/components/icon";
import {
  todoQueryKey,
  useDeleteTodoLabelMutation,
} from "@entities/todo";
import { useQueryClient } from "@tanstack/react-query";

function TodoLabelItem({
  data,
  onClick,
}: {
  data: TodoLabel & Id;
  onClick?: (data: (TodoLabel & Id) | undefined) => void;
}) {
  const { container, label } = todoLabelItemStyles;
  const { name, color } = data;
  const { mutate } = useDeleteTodoLabelMutation();
  const queryClient = useQueryClient();

  return (
    <div
      css={container}
      onClick={() => {
        if (onClick) {
          onClick(data);
        }
      }}
    >
      <div css={label(color)} />
      <span>{name}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          mutate(data.id);
          if (onClick) {
            onClick(undefined);
          }
          queryClient.invalidateQueries({
            queryKey: [todoQueryKey],
          });
        }}
      >
        <TrashIcon size={12} />
      </button>
    </div>
  );
}

export default TodoLabelItem;
