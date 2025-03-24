import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { getNewOrder } from "@shared/hooks/DnDWrapper";

export const useDnDTodo = () => {
  const { mutate: updateTodoMutate } =
    useUpdateTodoMutation();

  const handleDragEnd = (
    newItems: (Todo & Id)[],
    active: Todo & Id
  ) => {
    if (!active?.id) return;
    const newOrder = getNewOrder(active, newItems);
    active.order = newOrder;

    updateTodoMutate(active);
  };

  return { handleDragEnd };
};
