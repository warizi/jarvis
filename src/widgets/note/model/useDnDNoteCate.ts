import {
  NoteCateType,
  useUpdateNoteCateMutation,
} from "@entities/note";
import { Id } from "@shared/config/type/commonType";
import { getNewOrder } from "@shared/hooks/DnDWrapper";

export const useDnDNoteCate = () => {
  const { mutate: updateNoteCateMutate } =
    useUpdateNoteCateMutation();

  const handleDragEnd = (
    newItems: (NoteCateType & Id)[],
    active: NoteCateType & Id
  ) => {
    if (!active?.id) return;
    const newOrder = getNewOrder(active, newItems);
    active.order = newOrder;

    updateNoteCateMutate(active);
  };

  return { handleDragEnd };
};
