/** @jsxImportSource @emotion/react */

import { useGetAllNoteLabelQuery } from "@entities/note";
import { NoteLabel } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { dragableNoteLabelListStyles } from "./DragableNoteLabelList.style";
import { useTheme } from "@emotion/react";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import NoteLabelItem from "./NoteLabelItem";
import NoteLabelCreateBtn from "./NoteLabelCreateBtn";

type DragableNoteLabelListProps = {
  selectedLabel?: (NoteLabel & Id) | null;
  onClick: (data: (NoteLabel & Id) | undefined) => void;
};
function DragableNoteLabelList({
  selectedLabel,
  onClick,
}: DragableNoteLabelListProps) {
  const { data } = useGetAllNoteLabelQuery();
  const { container, ul } = dragableNoteLabelListStyles;
  const theme = useTheme();

  return (
    <div css={container}>
      <ul css={ul}>
        <SortableDndContext
          handleDragEnd={() => {}}
          data={data || []}
        >
          {(items) =>
            items?.map((noteLabel: NoteLabel & Id) => (
              <DraggableWrapper
                key={noteLabel.id}
                id={noteLabel.id}
              >
                <li
                  css={{
                    width: "fit-content",
                    borderRadius: theme.radius.small,
                    border:
                      selectedLabel?.id === noteLabel.id
                        ? `2px solid ${theme.colors.primary.light}`
                        : "1px solid transparent",
                  }}
                >
                  <NoteLabelItem
                    key={noteLabel.id}
                    data={noteLabel}
                    onClick={onClick}
                  />
                </li>
              </DraggableWrapper>
            ))
          }
        </SortableDndContext>
      </ul>
      <NoteLabelCreateBtn />
    </div>
  );
}

export default DragableNoteLabelList;
