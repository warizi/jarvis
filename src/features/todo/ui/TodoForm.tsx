/** @jsxImportSource @emotion/react */

import { Todo } from "@entities/todo/model/type";
import { todoFormStyles } from "./TodoForm.style";
import { Id } from "@shared/config/type/commonType";
import {
  ImportantCheckBox,
  TodoCheckbox,
} from "@shared/components/form";
import { Controller } from "react-hook-form";
import { useTodoform } from "../model/useTodoForm";
import SubTodoForm from "./SubTodoForm";
import DragableTodoLabelList from "./DragableTodoLabelList";
import { CommonEditor } from "@shared/components/editor";

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
        name="label"
        control={control}
        render={({ field }) => (
          <DragableTodoLabelList
            selectedLabel={field.value}
            onClick={(data) => {
              console.log("Clicked data:", data);
              const isSame = field.value?.id === data?.id;
              field.onChange(isSame ? null : data);
            }}
          />
        )}
      />
      <Controller
        name="memo"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div
            css={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
            }}
          >
            <CommonEditor
              value={field.value || ""}
              setValue={field.onChange}
            />
          </div>
        )}
      />
    </div>
  );
}

export default TodoForm;
