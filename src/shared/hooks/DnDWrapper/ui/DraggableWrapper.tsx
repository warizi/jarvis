/** @jsxImportSource @emotion/react */

import { Interpolation, Theme } from "@emotion/react";
import { useDraggableItem } from "../model/useDraggableItem";

function DraggableWrapper({
  id,
  children,
  css,
  ...rest
}: {
  id: number;
  children: React.ReactNode;
  css?: Interpolation<Theme>;
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
      {...rest}
      css={css}
    >
      {children}
    </div>
  );
}

export default DraggableWrapper;
