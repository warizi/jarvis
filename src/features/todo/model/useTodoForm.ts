import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { debounce, isEqual } from "lodash";

export const useTodoform = (data: Todo & Id) => {
  console.log("data: ", data);
  const { register, control, watch, setValue } = useForm({
    defaultValues: data,
  });

  const allValues = watch();
  const prevValuesRef = useRef<Todo & Id>(data);

  const { mutate } = useUpdateTodoMutation();

  const debouncedMutate = useMemo(() => {
    return debounce((formValues: Todo & Id) => {
      if (!formValues.isDone) {
        formValues.doneDate = null;
      }
      const completedForm = subComplete(formValues);
      setValue("isDone", completedForm.isDone);
      mutate(completedForm);
    }, 300);
  }, [mutate, setValue]);

  useEffect(() => {
    if (!isEqual(prevValuesRef.current, allValues)) {
      prevValuesRef.current = allValues;
      debouncedMutate({ ...allValues, id: data.id });
    }
    return () => {
      debouncedMutate.cancel();
    };
  }, [allValues, debouncedMutate, data.id]);

  return {
    register,
    control,
    isDone: allValues.isDone,
    allValues,
  };
};

function subComplete(value: Todo & Id) {
  const subTodos = JSON.parse(value.sub || "[]");
  const isAllSubDone = subTodos.every(
    (todo: Todo) => todo.isDone
  );

  if (subTodos.length === 0) return value;

  if (isAllSubDone) {
    return {
      ...value,
      isDone: true,
      doneDate: new Date().toISOString(),
    };
  }

  return {
    ...value,
  };
}
