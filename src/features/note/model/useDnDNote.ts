import { useUpdateNoteMutation } from "@entities/note";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { getNewOrder } from "@shared/hooks/DnDWrapper";

export const useDnDNote = () => {
  const { mutate: updateNoteMutate } =
    useUpdateNoteMutation();

  const handleDragEnd = (
    newItems: (Note & Id)[],
    active: Note & Id
  ) => {
    if (!active?.id) return;
    console.log("active", active);
    const newOrder = getNewOrder(active, newItems);
    active.order = newOrder;

    console.log("newItems", newItems);
    console.log("new active", active);
    updateNoteMutate(active);
  };

  return { handleDragEnd };
};
