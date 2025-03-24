/** @jsxImportSource @emotion/react */

import { OneLineTextForm } from "@shared/components/form";
import { useCreateTodo } from "../model/useCreateTodo";

function TodoCreateBtn({
  cateId,
  isToday,
  isImportant,
}: {
  cateId?: number;
  isToday?: boolean;
  isImportant?: boolean;
}) {
  const { register, onSubmit } = useCreateTodo({
    cateId,
    isToday,
    isImportant,
  });

  return (
    <OneLineTextForm
      label="todo"
      size="md"
      placeholder="새 작업 추가"
      onSubmit={onSubmit}
      {...register("title")}
    />
  );
}

export default TodoCreateBtn;
