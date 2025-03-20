/** @jsxImportSource @emotion/react */

import { ContextMenuItemType } from "../model/type";
import { contextMenuItemStyles } from "./ContextMenuItem.style";

function ContextMenuItem({
  label,
  onClick,
}: ContextMenuItemType) {
  const { container } = contextMenuItemStyles;
  return (
    <div css={container} onClick={onClick}>
      {label}
    </div>
  );
}

export default ContextMenuItem;
