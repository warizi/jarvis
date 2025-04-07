import { useUpdateNoteMutation } from "@entities/note";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { debounce, isEqual } from "lodash";
import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";

export const useNoteForm = (data: Note & Id) => {
  const { register, control, watch } = useForm({
    defaultValues: data,
  });
  const prevValuesRef = useRef<Note & Id>(data);
  const allValues = watch();
  const { mutate } = useUpdateNoteMutation();

  const debouncedMutate = useMemo(() => {
    return debounce((formValues: Note & Id) => {
      mutate(formValues);
    }, 300);
  }, [mutate]);

  useEffect(() => {
    if (!isEqual(prevValuesRef.current, allValues)) {
      prevValuesRef.current = watch();
      debouncedMutate({ ...watch(), id: data.id });
    }
    return () => {
      debouncedMutate.cancel();
    };
  }, [allValues, watch, debouncedMutate, data.id]);

  return {
    register,
    control,
    allValues,
  };
};
