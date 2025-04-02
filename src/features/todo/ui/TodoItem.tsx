/** @jsxImportSource @emotion/react */

import { Todo } from "@entities/todo/model/type";
import { todoItemStyles } from "./TodoItem.style";
import { Id } from "@shared/config/type/commonType";
import {
  ImportantCheckBox,
  TodoCheckbox,
} from "@shared/components/form";
import { useTodoCheckBox } from "../model/useTodoCheckBox";
import { formatDate } from "@shared/lib/formatDate";
import { SunIcon } from "@shared/components/icon";
import { useTheme } from "@emotion/react";
import { isToday } from "@shared/lib/isToday";
import { useTodoContextMenu } from "../model/useTodoContextMenu";

function TodoItem({
  data,
  onClick,
}: {
  data: Todo & Id;
  onClick?: () => void;
}) {
  const {
    container,
    spanDoneDate,
    innerContainer,
    todayButton,
    titleSpan,
    label,
  } = todoItemStyles;
  const {
    id,
    title,
    isDone,
    doneDate,
    isImportant,
    isToday: today,
    label: todoLabel,
  } = data;
  const theme = useTheme();
  const { handleCheck, handleImportant, handleToday } =
    useTodoCheckBox();
  const { openContextMenu } = useTodoContextMenu(id);

  return (
    <div
      css={container(isDone)}
      onClick={onClick}
      onContextMenu={openContextMenu}
    >
      <div
        css={{
          ...innerContainer(),
          width: "calc(100% - 80px)",
        }}
      >
        <div css={label(todoLabel?.color || "")} />
        <TodoCheckbox
          checked={isDone}
          onChange={handleCheck(data)}
        />
        <div
          css={{
            display: "flex",
            alignItems: "center",
            width: "calc(100% - 60px)",
          }}
        >
          <span css={titleSpan(isDone)}>{title}</span>
        </div>
        {doneDate && (
          <span css={spanDoneDate}>
            {formatDate(doneDate, "yyyy-MM-dd")}
          </span>
        )}
      </div>
      <div css={innerContainer}>
        <button
          type="button"
          css={todayButton}
          onClick={(e) => {
            e.stopPropagation();
            handleToday(data);
          }}
        >
          <SunIcon
            size={18}
            color={
              isToday(today)
                ? "#FF5954"
                : theme.colors.text.secondary
            }
          />
        </button>
        <ImportantCheckBox
          checked={isImportant}
          onChange={() => handleImportant(data)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
