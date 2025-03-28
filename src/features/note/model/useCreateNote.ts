import { useCreateNoteMutation } from "@entities/note";
import { Note } from "@entities/note/model/type";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useCreateNote = (cateId: number) => {
  const { register, handleSubmit, reset } = useForm<Note>({
    defaultValues: {
      title: "",
      content: "",
      isImportant: 0,
      cateId,
    },
  });

  const { mutate } = useCreateNoteMutation(cateId);

  const onSubmit = handleSubmit(async (data: Note) => {
    await mutate(data);
    reset();
  });

  useEffect(() => {
    reset({
      title: "",
      content: "",
      isImportant: 0,
      cateId,
    });
  }, [cateId, reset]);

  return { register, onSubmit };
};
