import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const useDraggableItem = (id: number) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return {
    ref: setNodeRef,
    style: {
      transform: CSS.Transform.toString(transform),
      transition,
    },
    listeners,
    attributes,
    isDragging,
  };
};
