/** @jsxImportSource @emotion/react */

import { OneLineTextForm } from "@shared/components/form";
import { useCreateTodo } from "../model/useCreateTodo";
import { todoCreateBtnStyles } from "./TodoCreateBtn.style";

function TodoCreateBtn({
  cateId,
  isToday,
  isImportant,
}: {
  cateId?: number;
  isToday?: boolean;
  isImportant?: boolean;
}) {
  const { container } = todoCreateBtnStyles;
  const { register, onSubmit } = useCreateTodo({
    cateId,
    isToday,
    isImportant,
  });

  return (
    <div css={container}>
      <OneLineTextForm
        label="todo"
        size="md"
        placeholder="새 작업 추가"
        onSubmit={onSubmit}
        {...register("title")}
      />
    </div>
  );
}

export default TodoCreateBtn;
