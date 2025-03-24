/** @jsxImportSource @emotion/react */

import { Todo } from "@entities/todo/model/type";
import { todoItemStyles } from "./TodoItem.style";
import { Id } from "@shared/config/type/commonType";
import { TodoCheckbox } from "@shared/components/form";
import { useTodoCheck } from "../model/useTodoCheck";
import { formatDate } from "@shared/lib/formatDate";

function TodoItem({ data }: { data: Todo & Id }) {
  const { container, spanDoneDate } = todoItemStyles;
  const { title, isDone, doneDate } = data;
  const { handleCheck } = useTodoCheck();
  return (
    <div css={container(isDone)}>
      <TodoCheckbox
        isChecked={isDone}
        onChange={handleCheck(data)}
      />
      {title}
      {doneDate && (
        <span css={spanDoneDate}>
          {formatDate(doneDate, "yyyy-dd-mm")}
        </span>
      )}
    </div>
  );
}

export default TodoItem;
