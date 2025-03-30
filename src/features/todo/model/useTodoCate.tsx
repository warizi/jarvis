import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../../../entities/todo/model/type";
import { useContextMenuStore } from "@shared/components/contextMenu";
import { useUpdateTodoCateMutation } from "../../../entities/todo/model/todoCateFetchHooks";
import { useState } from "react";
import { useTodoCateDelete } from "./useTodoCateDelete";

export const useTodoCate = (data: TodoCate & Id) => {
  const { id } = data;
  const { open, close } = useContextMenuStore();
  const { onDelete } = useTodoCateDelete(id);
  const { mutate: updateTodoCateMutate } =
    useUpdateTodoCateMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState<TodoCate & Id>(data);
  const handleValue = (
    key: keyof (TodoCate & Id),
    value: string
  ) => {
    setValues({
      ...values,
      [key]: value.trim(),
    });
  };

  const register = (key: keyof (TodoCate & Id)) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleValue(key, e.target.value);
    },
  });

  const onSubmit = async () => {
    if (!values.name && !values.name.trim()) return;
    await updateTodoCateMutate(values);
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
    evnet: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    evnet.preventDefault();
    const { clientX: x, clientY: y } = evnet;

    open(x, y, [
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
    openContextMenu,
    isEdit,
    register,
    onSubmit,
  };
};
