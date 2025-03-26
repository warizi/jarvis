import { useCreateTodoLabelMutation } from "@entities/todo";
import { TodoLabel } from "@entities/todo/model/type";
import { useForm } from "react-hook-form";

export const useCreateTodoLabel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<TodoLabel>({
    defaultValues: {
      name: "",
      order: 0,
      color: "#000000",
    },
  });

  const { mutate } = useCreateTodoLabelMutation();

  const onSubmit = handleSubmit(async (data: TodoLabel) => {
    await mutate(data);
    reset();
  });

  return { register, onSubmit, errors, control };
};
