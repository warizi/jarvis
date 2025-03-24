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

function TodoItem({ data }: { data: Todo & Id }) {
  const { container, spanDoneDate, innerContainer } =
    todoItemStyles;
  const { title, isDone, doneDate, isImportant } = data;
  const { handleCheck, handleImportant } =
    useTodoCheckBox();
  const { openTodoSplitModal } = useTodoSplitModal();
  return (
    <div
      css={container(isDone)}
      onClick={openTodoSplitModal(data)}
    >
      <div css={innerContainer}>
        <TodoCheckbox
          checked={isDone}
          onChange={handleCheck(data)}
        />
        {title}
        {doneDate && (
          <span css={spanDoneDate}>
            {formatDate(doneDate, "yyyy-dd-mm")}
          </span>
        )}
      </div>
      <div css={innerContainer}>
        <ImportantCheckBox
          checked={isImportant}
          onChange={() => handleImportant(data)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
