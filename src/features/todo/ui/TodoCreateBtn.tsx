/** @jsxImportSource @emotion/react */

import { OneLineTextForm } from "@shared/components/form";
import { useCreateTodo } from "../model/useCreateTodo";

function TodoCreateBtn({ cateId }: { cateId?: number }) {
  const { register, onSubmit } = useCreateTodo(cateId);

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
