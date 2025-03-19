import { useCreateTodoCateMutation } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCate } from "@entities/todo/model/type";
import { useForm } from "react-hook-form";

export const useCreateTodoCate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoCate>({
    defaultValues: {
      name: "",
      order: 0,
    },
  });

  const { mutate } = useCreateTodoCateMutation();

  const onSubmit = handleSubmit(async (data: TodoCate) => {
    await mutate(data);
    reset();
  });

  return { register, onSubmit, errors };
};
