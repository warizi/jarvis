import {
  NoteCate,
  useCreateNoteCateMutation,
} from "@entities/note";
import { useForm } from "react-hook-form";

export const useCreateNoteCate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NoteCate>({
    defaultValues: {
      name: "",
      order: 0,
    },
  });

  const { mutate } = useCreateNoteCateMutation();

  const onSubmit = handleSubmit(async (data: NoteCate) => {
    await mutate(data);
    reset();
  });
  return {
    register,
    onSubmit,
    errors,
  };
};
