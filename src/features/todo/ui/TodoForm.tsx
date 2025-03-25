/** @jsxImportSource @emotion/react */

import { Todo } from "@entities/todo/model/type";
import { todoFormStyles } from "./TodoForm.style";
import { Id } from "@shared/config/type/commonType";
import {
  ImportantCheckBox,
  MemoTextarea,
  TodoCheckbox,
} from "@shared/components/form";
import { Controller } from "react-hook-form";
import { useTodoform } from "../model/useTodoForm";
import SubTodoForm from "./SubTodoForm";

function TodoForm({ data }: { data: Todo & Id }) {
  const { container, label, input } = todoFormStyles;

  const { register, control, isDone } = useTodoform(data);

  return (
    <div css={container}>
      <label htmlFor={`todo-${data.id}`} css={label}>
        <Controller
          name="isDone"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <TodoCheckbox
              checked={field.value}
              onChange={(e) =>
                field.onChange(e.target.checked)
              }
            />
          )}
        />
        <input
          id={`todo-${data.id}`}
          css={input(isDone)}
          type="text"
          {...register("title")}
        />
        <Controller
          name="isImportant"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <ImportantCheckBox
              checked={field.value}
              onChange={(e) =>
                field.onChange(e.target.checked)
              }
            />
          )}
        />
      </label>
      <Controller
        name="sub"
        control={control}
        defaultValue={"[]"}
        render={({ field }) => (
          <SubTodoForm
            data={field.value || "[]"}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="startDate"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MemoTextarea
            value={field.value}
            onChange={field.onChange}
            placeholder="메모를 입력하세요."
            height="100px"
          />
        )}
      />
    </div>
  );
}

export default TodoForm;
