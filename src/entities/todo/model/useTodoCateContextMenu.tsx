import { useContextMenuStore } from "@shared/components/contextMenu";
import { useState } from "react";

export const useTodoCateContextMenu = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { open, close } = useContextMenuStore();

  const handleEdit = () => {
    setIsEdit(true);
    close();
  };

  const handleOpen = (
    evnet: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    evnet.preventDefault();
    const { clientX: x, clientY: y } = evnet;

    open(x, y, [
      {
        label: "수정",
        onClick: handleEdit,
      },
      {
        label: "삭제",
        onClick: () => {},
      },
    ]);
  };

  return { handleOpen, isEdit };
};
