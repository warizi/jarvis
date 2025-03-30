import { useDeleteTodoMutation } from "@entities/todo";
import { useContextMenuStore } from "@shared/components/contextMenu";

export const useTodoContextMenu = (todoId: number) => {
  const { open, close } = useContextMenuStore();
  const { mutate: deleteTodoMutate } =
    useDeleteTodoMutation();

  const openContextMenu = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;

    open(x, y, [
      {
        label: "삭제",
        onClick: async () => {
          await deleteTodoMutate(todoId);
          close();
        },
      },
    ]);
  };

  return { openContextMenu };
};
