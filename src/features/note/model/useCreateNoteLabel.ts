import { useCreateNoteLabelMutation } from "@entities/note";
import { NoteLabel } from "@entities/note/model/type";
import { useForm } from "react-hook-form";

export const useCreateNoteLabel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<NoteLabel>({
    defaultValues: {
      name: "",
      order: 0,
      color: "#000000",
    },
  });

  const { mutate } = useCreateNoteLabelMutation();

  const onSubmit = handleSubmit(async (data: NoteLabel) => {
    await mutate(data);
    reset();
  });

  return { register, onSubmit, errors, control };
};
