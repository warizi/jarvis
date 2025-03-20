/** @jsxImportSource @emotion/react */

import { ContextMenuItemType } from "../model/type";
import {
  contextMenuStoreType,
  useContextMenuStore,
} from "../model/useContextMenuStore";
import { contextMenuStyles } from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";

function ContextMenu() {
  const { container } = contextMenuStyles;
  const { isOpen, position, items } = useContextMenuStore(
    (state) => state
  ) as contextMenuStoreType;

  return (
    <>
      {isOpen && (
        <div css={container(position)}>
          {items.map((item: ContextMenuItemType) => (
            <ContextMenuItem
              key={item.label}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ContextMenu;
