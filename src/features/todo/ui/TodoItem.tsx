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
import { useTodoSplitModal } from "../model/useTodoSplitModal";
import { SunIcon } from "@shared/components/icon";
import { useTheme } from "@emotion/react";
import { isToday } from "@shared/lib/isToday";

function TodoItem({ data }: { data: Todo & Id }) {
  const {
    container,
    spanDoneDate,
    innerContainer,
    todayButton,
    titleSpan,
    label,
  } = todoItemStyles;
  const {
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
  const { openTodoSplitModal } = useTodoSplitModal();
  return (
    <div
      css={container(isDone)}
      onClick={openTodoSplitModal(data)}
    >
      <div css={innerContainer}>
        <div css={label(todoLabel?.color || "")} />
        <TodoCheckbox
          checked={isDone}
          onChange={handleCheck(data)}
        />
        <span css={titleSpan(isDone)}>{title}</span>
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
            size={22}
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
