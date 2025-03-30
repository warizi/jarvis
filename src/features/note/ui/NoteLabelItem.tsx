/** @jsxImportSource @emotion/react */

import { NoteLabel } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { noteLabelItemStyles } from "./NoteLabelItem.style";
import { useNoteLabelContextMenu } from "../model/useNoteLabelContextMenu";

type NoteLabelItemProps = {
  data: NoteLabel & Id;
  onClick?: (data: (NoteLabel & Id) | undefined) => void;
};

function NoteLabelItem({
  data,
  onClick,
}: NoteLabelItemProps) {
  const { container, label } = noteLabelItemStyles;
  const { id, name, color } = data;
  const { openContextMenu } = useNoteLabelContextMenu(id);
  return (
    <div
      css={container}
      onClick={() => {
        if (onClick) {
          onClick(data);
        }
      }}
      onContextMenu={openContextMenu}
    >
      <div css={label(color)} />
      <span>{name}</span>
    </div>
  );
}

export default NoteLabelItem;
