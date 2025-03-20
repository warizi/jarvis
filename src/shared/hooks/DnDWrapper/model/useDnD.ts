import { useEffect, useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export const useDnD = <T extends { id: number }>(
  initItems: T[]
) => {
  const [items, setItems] = useState<T[]>(initItems);

  const onDragEnd =
    (callbackFn: (newItems: T[], active: T) => void) =>
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      const oldIndex = items.findIndex(
        (item) => item.id === active.id
      );
      const newIndex = items.findIndex(
        (item) => item.id === over.id
      );

      const activeItem = items[oldIndex];

      callbackFn(
        arrayMove(items, oldIndex, newIndex),
        activeItem
      );
      setItems((prev) =>
        arrayMove(prev, oldIndex, newIndex)
      );

      return arrayMove(items, oldIndex, newIndex);
    };

  useEffect(() => {
    setItems(initItems);
  }, [initItems]);

  return { items, onDragEnd };
};
