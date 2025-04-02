import {
  NoteCateType,
  useCreateNoteCateMutation,
} from "@entities/note";
import { useForm } from "react-hook-form";

export const useCreateNoteCate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NoteCateType>({
    defaultValues: {
      name: "",
      order: 0,
    },
  });

  const { mutate } = useCreateNoteCateMutation();

  const onSubmit = handleSubmit(
    async (data: NoteCateType) => {
      await mutate(data);
      reset();
    }
  );
  return {
    register,
    onSubmit,
    errors,
  };
};
