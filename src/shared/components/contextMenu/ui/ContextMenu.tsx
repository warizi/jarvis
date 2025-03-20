/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { ContextMenuItemType } from "../model/type";
import {
  contextMenuStoreType,
  useContextMenuStore,
} from "../model/useContextMenuStore";
import { contextMenuStyles } from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";

function ContextMenu() {
  const { container } = contextMenuStyles;
  const { position, items, close } = useContextMenuStore(
    (state) => state
  ) as contextMenuStoreType;

  useEffect(() => {
    const handleClose = () => close();
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div css={container(position)}>
      {items.map((item: ContextMenuItemType) => (
        <ContextMenuItem
          key={item.label}
          label={item.label}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default ContextMenu;
