import { useDeleteNoteMutation } from "@entities/note";
import { useContextMenuStore } from "@shared/components/contextMenu";

export const useNoteContextMenu = (noteId: number) => {
  const { open, close } = useContextMenuStore();
  const { mutate: deleteNoteMutate } =
    useDeleteNoteMutation();

  const openContextMenu = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;

    open(x, y, [
      {
        label: "삭제",
        onClick: async () => {
          await deleteNoteMutate(noteId);
          close();
        },
      },
    ]);
  };

  return { openContextMenu };
};
