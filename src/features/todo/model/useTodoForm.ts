import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "lodash";

export const useTodoform = (data: Todo & Id) => {
  const { register, control, watch } = useForm({
    defaultValues: data,
  });

  const allValues = watch();

  const { mutate } = useUpdateTodoMutation();

  const debouncedMutate = useMemo(() => {
    return debounce((formValues: Todo & Id) => {
      mutate(formValues);
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
