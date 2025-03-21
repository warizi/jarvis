import { useCreateTodoMutaion } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useCreateTodo = (cateId: number) => {
  const { register, handleSubmit, reset } = useForm<Todo>({
    defaultValues: {
      title: "",
      order: 0,
      isDone: false,
      isImportant: false,
      cateId,
    },
  });

  const { mutate } = useCreateTodoMutaion(cateId);
  const onSubmit = handleSubmit(async (data: Todo) => {
    console.log("create", data);
    await mutate(data);
    reset();
  });
  useEffect(() => {
    reset({
      title: "",
      order: 0,
      isDone: false,
      isImportant: false,
      cateId,
    });
  }, [cateId, reset]);
  return { register, onSubmit };
};
