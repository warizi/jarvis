import {
  NoteCate,
  useUpdateNoteCateMutation,
} from "@entities/note";
import { useContextMenuStore } from "@shared/components/contextMenu";
import { Id } from "@shared/config/type/commonType";
import { useNoteCateDelete } from "./useNoteCateDelete";
import { useState } from "react";

export const useNoteCateItem = (data: NoteCate & Id) => {
  const { id } = data;
  const { open, close } = useContextMenuStore();
  const { onDelete } = useNoteCateDelete(id);
  const { mutate: updateNoteCateMutate } =
    useUpdateNoteCateMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState<NoteCate & Id>(data);

  const handleValue = (
    key: keyof (NoteCate & Id),
    value: string
  ) => {
    setValues({
      ...values,
      [key]: value.trim(),
    });
  };

  const register = (key: keyof (NoteCate & Id)) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleValue(key, e.target.value);
    },
  });

  const onSubmit = async () => {
    if (!values.name && !values.name.trim()) return;
    await updateNoteCateMutate(values);
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
    close();
  };

  const handleDelete = async () => {
    await onDelete();
    setIsEdit(false);
    close();
  };

  const openContextMenu = (
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    open(clientX, clientY, [
      {
        label: "수정",
        onClick: handleEdit,
      },
      {
        label: "삭제",
        onClick: handleDelete,
      },
    ]);
  };

  return {
    isEdit,
    values,
    register,
    onSubmit,
    openContextMenu,
  };
};
