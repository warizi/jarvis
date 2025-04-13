import { useCreateTodoMutaion } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import moment from "moment";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useCreateTodo = ({
  cateId,
  isToday,
  isImportant,
}: {
  cateId?: number;
  isToday?: boolean;
  isImportant?: boolean;
}) => {
  const { register, handleSubmit, reset } = useForm<Todo>({
    defaultValues: {
      title: "",
      order: 0,
      isDone: false,
      isImportant: 0,
      cateId,
    },
  });
  const { mutate } = useCreateTodoMutaion(cateId);
  const onSubmit = handleSubmit(async (data: Todo) => {
    if (isToday) {
      const dateString = moment().tz("Asia/Seoul").format();
      data.isToday = dateString;
    }
    if (isImportant) {
      data.isImportant = 1;
    }
    await mutate(data);
    reset();
  });
  useEffect(() => {
    reset({
      title: "",
      order: 0,
      isDone: false,
      isImportant: 0,
      cateId,
    });
  }, [cateId, reset]);
  return { register, onSubmit };
};
