import { useUpdateTodoCateMutation } from "@entities/todo";
import { TodoCate } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { getNewOrder } from "@shared/hooks/DnDWrapper";

export const useDnDTodoCate = () => {
  const { mutate: updateTodoCateMutate } =
    useUpdateTodoCateMutation();

  const handleDragEnd = (
    newItems: (TodoCate & Id)[],
    active: TodoCate & Id
  ) => {
    if (!active?.id) return;
    const newOrder = getNewOrder(active, newItems);
    console.log(
      "새 order",
      newOrder,
      "nweItems",
      newItems,
      "active",
      active
    );
    active.order = newOrder;

    updateTodoCateMutate(active);
  };

  return { handleDragEnd };
};
