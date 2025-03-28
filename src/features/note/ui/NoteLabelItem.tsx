/** @jsxImportSource @emotion/react */

import { NoteLabel } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { noteLabelItemStyles } from "./NoteLabelItem.style";
import { useDeleteNoteLabelMutation } from "@entities/note";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "@shared/components/icon";
import { noteLabelQueryKey } from "@entities/note/model/constants";

type NoteLabelItemProps = {
  data: NoteLabel & Id;
  onClick?: (data: (NoteLabel & Id) | undefined) => void;
};

function NoteLabelItem({
  data,
  onClick,
}: NoteLabelItemProps) {
  const { container, label } = noteLabelItemStyles;
  const { name, color } = data;
  const { mutate } = useDeleteNoteLabelMutation();
  const queryClient = useQueryClient();

  return (
    <div
      css={container}
      onClick={() => {
        if (onClick) {
          onClick(data);
        }
      }}
    >
      <div css={label(color)} />
      <span>{name}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          mutate(data.id);
          if (onClick) {
            onClick(undefined);
          }
          queryClient.invalidateQueries({
            queryKey: [noteLabelQueryKey],
          });
        }}
      >
        <TrashIcon size={12} />
      </button>
    </div>
  );
}

export default NoteLabelItem;
