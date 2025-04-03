import { useCreateTodoCateMutation } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCateType } from "@entities/todo/model/type";
import { useForm } from "react-hook-form";

export const useCreateTodoCate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoCateType>({
    defaultValues: {
      name: "",
      order: 0,
    },
  });
  const { mutate } = useCreateTodoCateMutation();

  const onSubmit = handleSubmit(
    async (data: TodoCateType) => {
      await mutate(data);
      reset();
    }
  );

  return { register, onSubmit, errors };
};
