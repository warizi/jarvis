import { useDeleteTodoLabelMutation } from "@entities/todo";
import { useContextMenuStore } from "@shared/components/contextMenu";

export const useTodoLabelContextMenu = (
  todoLabelId: number
) => {
  const { open, close } = useContextMenuStore();
  const { mutate: deleteTodoLabelMutate } =
    useDeleteTodoLabelMutation();

  const openContextMenu = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;

    open(x, y, [
      {
        label: "삭제",
        onClick: async () => {
          await deleteTodoLabelMutate(todoLabelId);
          close();
        },
      },
    ]);
  };

  return { openContextMenu };
};
