import { useUpdateTodoCateMutation } from "@entities/todo";
import { TodoCateType } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { getNewOrder } from "@shared/hooks/DnDWrapper";

export const useDnDTodoCate = () => {
  const { mutate: updateTodoCateMutate } =
    useUpdateTodoCateMutation();

  const handleDragEnd = (
    newItems: (TodoCateType & Id)[],
    active: TodoCateType & Id
  ) => {
    if (!active?.id) return;
    const newOrder = getNewOrder(active, newItems);
    active.order = newOrder;

    updateTodoCateMutate(active);
  };

  return { handleDragEnd };
};
