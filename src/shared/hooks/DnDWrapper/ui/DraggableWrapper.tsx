/** @jsxImportSource @emotion/react */

import { useDraggableItem } from "../model/useDraggableItem";

function DraggableWrapper({
  id,
  children,
}: {
  id: number;
  children: React.ReactNode;
}) {
  const { ref, style, listeners, attributes, isDragging } =
    useDraggableItem(id);

  if (isDragging) {
    return (
      <div ref={ref} style={style}>
        <div
          style={{
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <div
      ref={ref}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}

export default DraggableWrapper;
