/** @jsxImportSource @emotion/react */

import { OneLineTextForm } from "@shared/components/form";
import { useCreateTodoCate } from "../model/useCraeteTodoCate";

function TodoCateCreateBtn() {
  const { register, onSubmit } = useCreateTodoCate();

  return (
    <OneLineTextForm
      label="todo-cate"
      size="sm"
      placeholder="새 목록 1"
      onSubmit={onSubmit}
      {...register("name")}
    />
  );
}

export default TodoCateCreateBtn;
