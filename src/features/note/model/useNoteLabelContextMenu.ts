import { useDeleteNoteLabelMutation } from "@entities/note";
import { useContextMenuStore } from "@shared/components/contextMenu";

export const useNoteLabelContextMenu = (
  noteLabelId: number
) => {
  const { open, close } = useContextMenuStore();
  const { mutate: deleteNoteLabelMutate } =
    useDeleteNoteLabelMutation();

  const openContextMenu = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;

    open(x, y, [
      {
        label: "삭제",
        onClick: async () => {
          await deleteNoteLabelMutate(noteLabelId);
          close();
        },
      },
    ]);
  };

  return { openContextMenu };
};
