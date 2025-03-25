import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "lodash";

export const useTodoform = (data: Todo & Id) => {
  const { register, control, watch, setValue } = useForm({
    defaultValues: data,
  });

  const allValues = watch();

  const { mutate } = useUpdateTodoMutation();

  const debouncedMutate = useMemo(() => {
    return debounce((formValues: Todo & Id) => {
      const completedForm = subComplete(formValues);
      // 폼 상태에 isDone 값을 반영
      setValue("isDone", completedForm.isDone);
      mutate(completedForm);
    }, 300);
  }, [mutate]);

  useEffect(() => {
    debouncedMutate({ ...allValues, id: data.id });
    return () => {
      debouncedMutate.cancel();
    };
  }, [allValues, debouncedMutate, data.id]);

  return { register, control, isDone: allValues.isDone };
};

function subComplete(value: Todo & Id) {
  const subTodos = JSON.parse(value.sub || "[]");
  const isDone = subTodos.every(
    (todo: Todo) => todo.isDone
  );

  if (subTodos.length === 0) return value;

  value.isDone = isDone;
  return value;
}
