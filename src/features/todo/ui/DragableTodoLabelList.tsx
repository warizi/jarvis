/** @jsxImportSource @emotion/react */

import { TodoLabel } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import TodoLabelItem from "./TodoLabelItem";
import { useGetAllTodoLabelQuery } from "@entities/todo";
import { dragableTodoLabelListStyles } from "./DragableTodoLabelList.style";
import { useTheme } from "@emotion/react";
import TodoLabelCreateBtn from "./TodoLabelCreateBtn";

function DragableTodoLabelList({
  selectedLabel,
  onClick,
}: {
  selectedLabel?: (TodoLabel & Id) | null;
  onClick: (data: (TodoLabel & Id) | undefined) => void;
}) {
  const { data } = useGetAllTodoLabelQuery();
  const { container, ul } = dragableTodoLabelListStyles;
  const theme = useTheme();

  return (
    <div css={container}>
      <ul css={ul}>
        <SortableDndContext
          handleDragEnd={() => {}}
          data={data || []}
        >
          {(items) =>
            items?.map((todoLabel: TodoLabel & Id) => (
              <DraggableWrapper
                key={todoLabel.id}
                id={todoLabel.id}
              >
                <div
                  css={{
                    width: "fit-content",
                    borderRadius: theme.radius.small,
                    border:
                      selectedLabel?.id === todoLabel.id
                        ? `2px solid ${theme.colors.primary.light}`
                        : "1px solid transparent",
                  }}
                >
                  <TodoLabelItem
                    key={todoLabel.id}
                    data={todoLabel}
                    onClick={onClick}
                  />
                </div>
              </DraggableWrapper>
            ))
          }
        </SortableDndContext>
      </ul>
      <TodoLabelCreateBtn />
    </div>
  );
}

export default DragableTodoLabelList;
