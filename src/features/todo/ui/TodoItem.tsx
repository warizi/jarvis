/** @jsxImportSource @emotion/react */

import { Todo } from "@entities/todo/model/type";
import { todoItemStyles } from "./TodoItem.style";
import { Id } from "@shared/config/type/commonType";

function TodoItem({ data }: { data: Todo & Id }) {
  const { container } = todoItemStyles;
  const { title } = data;
  return <div css={container}>{title}</div>;
}

export default TodoItem;
