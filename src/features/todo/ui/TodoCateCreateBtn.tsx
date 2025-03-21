/** @jsxImportSource @emotion/react */

import { PlusIcon } from "@shared/components/icon";
import { TodoCateCreateBtnStyle } from "./TodoCateCreateBtn.style";
import { useCreateTodoCate } from "../model/useCraeteTodoCate";

function TodoCateCreateBtn() {
  const { register, onSubmit } = useCreateTodoCate();
  const { button, input, container } =
    TodoCateCreateBtnStyle;

  return (
    <label htmlFor="create-todo-cate" css={container}>
      <button css={button} onClick={onSubmit}>
        <PlusIcon color="currentColor" />
      </button>
      <input
        id="create-todo-cate"
        css={input}
        type="text"
        placeholder="새 목록"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
        {...register("name", { required: true })}
      />
    </label>
  );
}

export default TodoCateCreateBtn;
