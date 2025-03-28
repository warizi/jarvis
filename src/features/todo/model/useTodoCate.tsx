import { Id } from "@shared/config/type/commonType";
import { TodoCate } from "../../../entities/todo/model/type";
import { useContextMenuStore } from "@shared/components/contextMenu";
import { useUpdateTodoCateMutation } from "../../../entities/todo/model/todoCateFetchHooks";
import { useEffect, useRef, useState } from "react";
import { useTodoCateDelete } from "./useTodoCateDelete";

export const useTodoCate = (data: TodoCate & Id) => {
  const { id } = data;
  const { open, close } = useContextMenuStore();
  const { onDelete } = useTodoCateDelete(id);
  const { mutate: updateTodoCateMutate } =
    useUpdateTodoCateMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState<TodoCate & Id>(data);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      onSubmit();
    }
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

  useEffect(() => {
    if (isEdit) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isEdit]);

  return {
    openContextMenu,
    isEdit,
    register,
    onSubmit,
    inputRef,
    handleKeyDown,
  };
};
