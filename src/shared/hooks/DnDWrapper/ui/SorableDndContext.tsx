import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useDnD } from "../model/useDnD";
import { Id } from "@shared/config/type/commonType";

type SortableDndContextProps<T extends Id> = {
  children: (items: T[]) => React.ReactNode;
  handleDragEnd: (newItems: T[], active: T) => void;
  data: T[];
};

const SortableDndContext = <T extends Id>({
  children,
  handleDragEnd,
  data,
}: SortableDndContextProps<T>) => {
  const { items, onDragEnd } = useDnD<T>(data || []);

  return (
    <DndContext onDragEnd={onDragEnd(handleDragEnd)}>
      <SortableContext items={items}>
        {children(items)}
      </SortableContext>
    </DndContext>
  );
};

export default SortableDndContext;
